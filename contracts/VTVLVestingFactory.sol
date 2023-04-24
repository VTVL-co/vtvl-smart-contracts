// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./VTVLVesting.sol";
import "./Structure.sol";

/// @title Vesting Factory contract
/// @notice Create Vesting contract

contract VTVLVestingFactory is Ownable {
    event CreateVestingContract(
        address indexed vestingAddress,
        address deployer
    );

    /**
     * @notice Create Vesting contract
     * @param _tokenAddress Vesting Fund token address
     */
    function createVestingContract(
        IERC20 _tokenAddress,
        uint256 fundAmount,
        address _recipient,
        InputClaim memory _claim
    ) public {
        require(
            _claim.cliffAmount + _claim.linearVestAmount == fundAmount,
            "INSUFFICIENT_BALANCE"
        );

        VTVLVesting vestingContract = new VTVLVesting(
            _tokenAddress,
            msg.sender,
            _recipient,
            _claim
        );

        IERC20(_tokenAddress).transferFrom(
            msg.sender,
            address(vestingContract),
            fundAmount
        );

        emit CreateVestingContract(address(vestingContract), msg.sender);
    }
}
