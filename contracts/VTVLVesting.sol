//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;
// Note: using solidity 0.8, SafeMath not needed any more

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./AccessProtected.sol";
import "./VTVLNFT.sol";

contract VTVLVesting is Context, AccessProtected, ReentrancyGuard, VTVLNFT {
    using SafeERC20 for IERC20;

    /**
    @notice Address of the token that we're vesting
     */
    IERC20 public immutable tokenAddress;

    /**
    @notice How many tokens are already allocated to vesting schedules.
    @dev Our balance of the token must always be greater than this amount.
    * Otherwise we risk some users not getting their shares.
    * This gets reduced as the users are paid out or when their schedules are revoked (as it is not reserved any more).
    * In other words, this represents the amount the contract is scheduled to pay out at some point if the 
    * owner were to never interact with the contract.
    */
    uint256 public numTokensReservedForVesting = 0;

    // Using 40 bits for timestamp (seconds)
    // Gives us a range from 1 Jan 1970 (Unix epoch) up to approximately 35 thousand years from then (2^40 / (365 * 24 * 60 * 60) ~= 35k)
    uint40 public startTimestamp; // When does the vesting start (40 bits is enough for TS)
    uint40 public endTimestamp; // When does the vesting end - the vesting goes linearly between the start and end timestamps
    uint40 public cliffReleaseTimestamp; // At which timestamp is the cliffAmount released. This must be <= startTimestamp
    uint40 public releaseIntervalSecs; // Every how many seconds does the vested amount increase.
    // uint112 range: range 0 –     5,192,296,858,534,827,628,530,496,329,220,095.
    // uint112 range: range 0 –                             5,192,296,858,534,827.
    uint256 public linearVestAmount; // total entitlement
    uint112 public cliffAmount; // how much is released at the cliff

    // withdrawn amount for each NFTs
    mapping(uint256 => uint256) private withdrawnAmounts;

    // active status for each NFTs
    mapping(uint256 => bool) public isActives;

    // amount of fractional nfts
    uint256 public fractionalAmount;

    // Events:
    /**
    @notice Emitted when a founder adds a vesting schedule.
     */
    event ClaimCreated(
        address indexed _owner,
        uint256 _fractionalAmount,
        uint40 _startTimestamp,
        uint40 _endTimestamp,
        uint40 _cliffReleaseTimestamp,
        uint40 _releaseIntervalSecs,
        uint112 _cliffAmount,
        uint256 _linearVestAmount
    ); // let everyone know

    /**
    @notice Emitted when someone withdraws a vested amount
    */
    event Claimed(
        address indexed _recipient,
        uint256 _fractionalId,
        uint256 _withdrawalAmount
    );

    /** 
    @notice Emitted when a claim is revoked
    */
    event ClaimRevoked(
        uint256 indexed _fractionalId,
        uint256 _numTokensWithheld,
        uint256 revocationTimestamp
    );

    /** 
    @notice Emitted when admin withdraws.
    */
    event AdminWithdrawn(address indexed _recipient, uint256 _amountRequested);

    //
    /**
    @notice Construct the contract, taking the ERC20 token to be vested as the parameter.
    @dev The owner can set the contract in question when creating the contract.
     */
    constructor(IERC20 _tokenAddress) {
        require(address(_tokenAddress) != address(0), "INVALID_ADDRESS");
        tokenAddress = _tokenAddress;
    }

    /**
    @notice Basic getter for a claim.
    @dev Could be using public claims var, but this is cleaner in terms of naming. (getClaim(address) as opposed to claims(address)).
     */
    function getClaim()
        external
        view
        returns (
            uint40,
            uint40,
            uint40,
            uint40,
            uint256,
            uint112,
            uint256
        )
    {
        return (
            startTimestamp,
            endTimestamp,
            cliffReleaseTimestamp,
            releaseIntervalSecs,
            linearVestAmount,
            cliffAmount,
            fractionalAmount
        );
    }

    /**
    @notice Get the withdrawn amount for each nfts. 
    @param _fractionalId - the Id of NFT that you are going to get the withdrawn amount
     */
    function getWithdrawnAmount(uint256 _fractionalId)
        external
        view
        returns (uint256)
    {
        return withdrawnAmounts[_fractionalId];
    }

    /**
    @notice This modifier requires that an user has a fractional NFT.
    */
    modifier isNFTOwner(uint256 _nftId) {
        require(ownerOf(_nftId) == msg.sender, "NO_NFT_OWNER");
        _;
    }

    /**
    @notice This modifier requires that an user has a claim attached.
    @dev  To determine this, we check that a claim:
    * - is active
    * - start timestamp is nonzero.
    * These are sufficient conditions because we only ever set startTimestamp in 
    * createClaim, and we never change it. Therefore, startTimestamp will be set
    * IFF a claim has been created. In addition to that, we need to check
    * a claim is active (since this is has_*Active*_Claim)
    */
    modifier hasActiveClaim(uint256 _fractionalId) {
        require(startTimestamp > 0, "NO_ACTIVE_CLAIM");

        // We however still need the active check, since (due to the name of the function)
        // we want to only allow active claims
        require(isActives[_fractionalId] == true, "NO_ACTIVE_CLAIM");

        // Save gas, omit further checks
        // require(_claim.linearVestAmount + _claim.cliffAmount > 0, "INVALID_VESTED_AMOUNT");
        // require(_claim.endTimestamp > 0, "NO_END_TIMESTAMP");
        _;
    }

    /**
    @notice Pure function to calculate the vested amount from a given _claim, at a reference timestamp
    @param _fractionalId Id of fractional NFT
    @param _referenceTs Timestamp for which we're calculating
     */
    function _baseVestedAmount(uint256 _fractionalId, uint40 _referenceTs)
        internal
        view
        returns (uint256)
    {
        uint256 vestAmt = 0;

        // the condition to have anything vested is to be active
        if (isActives[_fractionalId]) {
            // no point of looking past the endTimestamp as nothing should vest afterwards
            // So if we're past the end, just get the ref frame back to the end
            if (_referenceTs > endTimestamp) {
                _referenceTs = endTimestamp;
            }

            // If we're past the cliffReleaseTimestamp, we release the cliffAmount
            // We don't check here that cliffReleaseTimestamp is after the startTimestamp
            if (_referenceTs >= cliffReleaseTimestamp) {
                vestAmt += cliffAmount;
            }

            // Calculate the linearly vested amount - this is relevant only if we're past the schedule start
            // at _referenceTs == startTimestamp, the period proportion will be 0 so we don't need to start the calc
            if (_referenceTs > startTimestamp) {
                uint40 currentVestingDurationSecs = _referenceTs -
                    startTimestamp; // How long since the start
                // Next, we need to calculated the duration truncated to nearest releaseIntervalSecs
                uint40 truncatedCurrentVestingDurationSecs = (currentVestingDurationSecs /
                        releaseIntervalSecs) * releaseIntervalSecs;
                uint40 finalVestingDurationSecs = endTimestamp - startTimestamp; // length of the interval

                // Calculate the linear vested amount - fraction_of_interval_completed * linearVestedAmount
                // Since fraction_of_interval_completed is truncatedCurrentVestingDurationSecs / finalVestingDurationSecs, the formula becomes
                // truncatedCurrentVestingDurationSecs / finalVestingDurationSecs * linearVestAmount, so we can rewrite as below to avoid
                // rounding errors
                uint256 _linearVestAmount = (linearVestAmount *
                    truncatedCurrentVestingDurationSecs) /
                    finalVestingDurationSecs;

                // Having calculated the linearVestAmount, simply add it to the vested amount
                vestAmt += _linearVestAmount;
            }

            return vestAmt / fractionalAmount;
        }

        // Return the bigger of (vestAmt, _claim.amountWithdrawn)
        // Rationale: no matter how we calculate the vestAmt, we can never return that less was vested than was already withdrawn.
        // Case where this could be relevant - If the claim is inactive, vestAmt would be 0, yet if something was already withdrawn
        // on that claim, we want to return that as vested thus far - as we want the function to be monotonic.
        return withdrawnAmounts[_fractionalId];
    }

    /**
    @notice Calculate the amount vested for a given _recipient at a reference timestamp.
    @param _fractionalId - The ID of fractional NFT.
    @param _referenceTs - The timestamp at which we want to calculate the vested amount.
    @dev Simply call the _baseVestedAmount for the claim in question
    */
    function vestedAmount(uint256 _fractionalId, uint40 _referenceTs)
        public
        view
        returns (uint256)
    {
        return _baseVestedAmount(_fractionalId, _referenceTs);
    }

    /**
    @notice Calculate the total vested at the end of the schedule, by simply feeding in the end timestamp to the function above.
    @dev This fn is somewhat superfluous, should probably be removed.
    @param _fractionalId - The factional NFT id for whom we're calculating
     */
    function finalVestedAmount(uint256 _fractionalId)
        public
        view
        returns (uint256)
    {
        return _baseVestedAmount(_fractionalId, endTimestamp);
    }

    /**
    @notice Calculates how much can we claim, by subtracting the already withdrawn amount from the vestedAmount at this moment.
    @param _fractionalId - The fractional NFT Id for whom we're calculating
    */
    function claimableAmount(uint256 _fractionalId)
        external
        view
        returns (uint256)
    {
        return
            _baseVestedAmount(_fractionalId, uint40(block.timestamp)) -
            withdrawnAmounts[_fractionalId];
    }

    // /**
    // @notice Return all the addresses that have vesting schedules attached.
    // */
    // function allVestingRecipients() external view returns (address[] memory) {
    //     return vestingRecipients;
    // }

    /** 
    @notice Get the total number of fractional NFTs.
    */
    function numFractionals() external view returns (uint256) {
        return fractionalAmount;
    }

    /** 
    @notice Permission-unchecked version of claim creation (no onlyAdmin). Actual logic for create claim, to be run within either createClaim or createClaimBatch.
    @dev This'll simply check the input parameters, and create the structure verbatim based on passed in parameters.
    @param _recipient - The address of the recipient of the schedule
    @param _fractionalAmount - The amount of fractionals
    @param _startTimestamp - The timestamp when the linear vesting starts
    @param _endTimestamp - The timestamp when the linear vesting ends
    @param _cliffReleaseTimestamp - The timestamp when the cliff is released (must be <= _startTimestamp, or 0 if no vesting)
    @param _releaseIntervalSecs - The release interval for the linear vesting. If this is, for example, 60, that means that the linearly vested amount gets released every 60 seconds.
    @param _linearVestAmount - The total amount to be linearly vested between _startTimestamp and _endTimestamp
    @param _cliffAmount - The amount released at _cliffReleaseTimestamp. Can be 0 if _cliffReleaseTimestamp is also 0.
     */
    function _createClaimUnchecked(
        address _recipient,
        uint256 _fractionalAmount,
        uint40 _startTimestamp,
        uint40 _endTimestamp,
        uint40 _cliffReleaseTimestamp,
        uint40 _releaseIntervalSecs,
        uint112 _linearVestAmount,
        uint112 _cliffAmount
    ) private {
        require(_recipient != address(0), "INVALID_ADDRESS");
        require(_linearVestAmount + _cliffAmount > 0, "INVALID_VESTED_AMOUNT"); // Actually only one of linearvested/cliff amount must be 0, not necessarily both
        require(_startTimestamp > 0, "INVALID_START_TIMESTAMP");
        // Do we need to check whether _startTimestamp is greater than the current block.timestamp?
        // Or do we allow schedules that started in the past?
        // -> Conclusion: we want to allow this, for founders that might have forgotten to add some users, or to avoid issues with transactions not going through because of discoordination between block.timestamp and sender's local time
        // require(_endTimestamp > 0, "_endTimestamp must be valid"); // not necessary because of the next condition (transitively)
        require(_startTimestamp < _endTimestamp, "INVALID_END_TIMESTAMP"); // _endTimestamp must be after _startTimestamp
        require(_releaseIntervalSecs > 0, "INVALID_RELEASE_INTERVAL");
        require(
            (_endTimestamp - _startTimestamp) % _releaseIntervalSecs == 0,
            "INVALID_INTERVAL_LENGTH"
        );

        require(_fractionalAmount > 0, "INVALID_FRACTIONAL_AMOUNT");

        // Potential TODO: sanity check, if _linearVestAmount == 0, should we perhaps force that start and end ts are the same?

        // No point in allowing cliff TS without the cliff amount or vice versa.
        // Both or neither of _cliffReleaseTimestamp and _cliffAmount must be set. If cliff is set, _cliffReleaseTimestamp must be before or at the _startTimestamp
        require(
            (_cliffReleaseTimestamp > 0 &&
                _cliffAmount > 0 &&
                _cliffReleaseTimestamp <= _startTimestamp) ||
                (_cliffReleaseTimestamp == 0 && _cliffAmount == 0),
            "INVALID_CLIFF"
        );

        startTimestamp = _startTimestamp;
        endTimestamp = _endTimestamp;
        cliffReleaseTimestamp = _cliffReleaseTimestamp;
        releaseIntervalSecs = _releaseIntervalSecs;
        cliffAmount = _cliffAmount;
        linearVestAmount = _linearVestAmount;

        // Our total allocation is simply the full sum of the two amounts, _cliffAmount + _linearVestAmount
        // Not necessary to use the more complex logic from _baseVestedAmount
        numTokensReservedForVesting = _cliffAmount + _linearVestAmount;

        // Still no effects up to this point (and tokenAddress is selected by contract deployer and is immutable), so no reentrancy risk
        require(
            tokenAddress.balanceOf(address(this)) >=
                numTokensReservedForVesting,
            "INSUFFICIENT_BALANCE"
        );

        // Done with checks

        // Effects limited to lines below
        emit ClaimCreated(
            _recipient,
            _fractionalAmount,
            startTimestamp,
            endTimestamp,
            cliffReleaseTimestamp,
            releaseIntervalSecs,
            cliffAmount,
            linearVestAmount
        ); // let everyone know
    }

    /** 
    @notice Create a claim based on the input parameters.
    @dev This'll simply check the input parameters, and create the structure verbatim based on passed in parameters.
    @param _recipient - The address of the recipient of the schedule
    @param _startTimestamp - The timestamp when the linear vesting starts
    @param _endTimestamp - The timestamp when the linear vesting ends
    @param _cliffReleaseTimestamp - The timestamp when the cliff is released (must be <= _startTimestamp, or 0 if no vesting)
    @param _releaseIntervalSecs - The release interval for the linear vesting. If this is, for example, 60, that means that the linearly vested amount gets released every 60 seconds.
    @param _linearVestAmount - The total amount to be linearly vested between _startTimestamp and _endTimestamp
    @param _cliffAmount - The amount released at _cliffReleaseTimestamp. Can be 0 if _cliffReleaseTimestamp is also 0.
    @param _fractionalAmount - The amount of fractionals
     */
    function createClaim(
        address _recipient,
        uint40 _startTimestamp,
        uint40 _endTimestamp,
        uint40 _cliffReleaseTimestamp,
        uint40 _releaseIntervalSecs,
        uint112 _linearVestAmount,
        uint112 _cliffAmount,
        uint112 _fractionalAmount
    ) external onlyAdmin {
        // check if it already has vesting schedule.
        require(startTimestamp == 0, "CLAIM_ALREADY_EXISTS");

        _createClaimUnchecked(
            _recipient,
            _fractionalAmount,
            _startTimestamp,
            _endTimestamp,
            _cliffReleaseTimestamp,
            _releaseIntervalSecs,
            _linearVestAmount,
            _cliffAmount
        );

        // Mint ERC1155 NFT to the recipient
        _mint(_recipient, _fractionalAmount);
        fractionalAmount = _fractionalAmount;

        // set isActive as true
        for (uint112 i = 1; i <= _fractionalAmount; ) {
            unchecked {
                isActives[i] = true;
                ++i;
            }
        }
    }

    /**
    @notice Withdraw the full claimable balance.
    @dev hasActiveClaim throws off anyone without a claim.
    @param _fractionalId - The fraction NFT Id that is going to withdraw with.
     */
    function withdraw(uint256 _fractionalId)
        external
        hasActiveClaim(_fractionalId)
        isNFTOwner(_fractionalId)
        nonReentrant
    {
        // Get the message sender claim - if any

        // we can use block.timestamp directly here as reference TS, as the function itself will make sure to cap it to endTimestamp
        // Conversion of timestamp to uint40 should be safe since 48 bit allows for a lot of years.
        uint256 allowance = vestedAmount(
            _fractionalId,
            uint40(block.timestamp)
        );

        // Make sure we didn't already withdraw more that we're allowed.
        require(
            allowance > withdrawnAmounts[_fractionalId] && allowance > 0,
            "NOTHING_TO_WITHDRAW"
        );

        // Calculate how much can we withdraw (equivalent to the above inequality)
        uint256 amountRemaining = allowance - withdrawnAmounts[_fractionalId];

        // "Double-entry bookkeeping"
        // Carry out the withdrawal by noting the withdrawn amount, and by transferring the tokens.
        withdrawnAmounts[_fractionalId] += amountRemaining;
        // Reduce the allocated amount since the following transaction pays out so the "debt" gets reduced
        numTokensReservedForVesting -= amountRemaining;

        // After the "books" are set, transfer the tokens
        // Reentrancy note - internal vars have been changed by now
        // Also following Checks-effects-interactions pattern
        tokenAddress.safeTransfer(_msgSender(), amountRemaining);

        // Let withdrawal known to everyone.
        emit Claimed(_msgSender(), _fractionalId, amountRemaining);
    }

    /**
    @notice Admin withdrawal of the unallocated tokens.
    @param _amountRequested - the amount that we want to withdraw
     */
    function withdrawAdmin(uint256 _amountRequested)
        public
        onlyAdmin
        nonReentrant
    {
        // Allow the owner to withdraw any balance not currently tied up in contracts.
        uint256 amountRemaining = amountAvailableToWithdrawByAdmin();

        require(amountRemaining >= _amountRequested, "INSUFFICIENT_BALANCE");

        // Actually withdraw the tokens
        // Reentrancy note - this operation doesn't touch any of the internal vars, simply transfers
        // Also following Checks-effects-interactions pattern
        tokenAddress.safeTransfer(_msgSender(), _amountRequested);

        // Let the withdrawal known to everyone
        emit AdminWithdrawn(_msgSender(), _amountRequested);
    }

    /** 
    @notice Allow an Owner to revoke a claim that is already active.
    @dev The requirement is that a claim exists and that it's active.
    */
    function revokeClaim(uint256 _fractionalId)
        external
        onlyAdmin
        hasActiveClaim(_fractionalId)
    {
        // Calculate what the claim should finally vest to
        uint256 finalVestAmt = finalVestedAmount(_fractionalId);

        // No point in revoking something that has been fully consumed
        // so require that there be unconsumed amount
        require(
            withdrawnAmounts[_fractionalId] < finalVestAmt,
            "NO_UNVESTED_AMOUNT"
        );

        // The amount that is "reclaimed" is equal to the total allocation less what was already withdrawn
        uint256 amountRemaining = finalVestAmt -
            withdrawnAmounts[_fractionalId];

        // Deactivate the claim, and release the appropriate amount of tokens
        isActives[_fractionalId] = false; // This effectively reduces the liability by amountRemaining, so we can reduce the liability numTokensReservedForVesting by that much
        numTokensReservedForVesting -= amountRemaining; // Reduces the allocation

        // Tell everyone a claim has been revoked.
        emit ClaimRevoked(
            _fractionalId,
            amountRemaining,
            uint40(block.timestamp)
        );
    }

    /**
    @notice Withdraw a token which isn't controlled by the vesting contract.
    @dev This contract controls/vests token at "tokenAddress". However, someone might send a different token. 
    To make sure these don't get accidentally trapped, give admin the ability to withdraw them (to their own address).
    Note that the token to be withdrawn can't be the one at "tokenAddress".
    @param _otherTokenAddress - the token which we want to withdraw
     */
    function withdrawOtherToken(IERC20 _otherTokenAddress)
        external
        onlyAdmin
        nonReentrant
    {
        require(_otherTokenAddress != tokenAddress, "INVALID_TOKEN"); // tokenAddress address is already sure to be nonzero due to constructor
        uint256 bal = _otherTokenAddress.balanceOf(address(this));
        require(bal > 0, "INSUFFICIENT_BALANCE");
        _otherTokenAddress.safeTransfer(_msgSender(), bal);
    }

    /**
     * @notice Get amount that is not vested in contract
     * @dev Whenever vesting is revoked, this amount will be increased.
     */
    function amountAvailableToWithdrawByAdmin() public view returns (uint256) {
        return
            tokenAddress.balanceOf(address(this)) - numTokensReservedForVesting;
    }
}
