// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "erc721a/contracts/ERC721A.sol";

import "./VTVLVesting.sol";

/// @title Vesting Factory contract
/// @notice Create Vesting contract

contract VTVLVestingFactory is ERC721A, Ownable {
    using Counters for Counters.Counter;
    string baseURI;

    /// Store vesting contract addresses as key
    mapping(address => bool) isVestingContracts;

    /**
     * @notice Initialize ERC1155
     * @dev tokenId will start from 1
     */
    constructor() ERC721A("VTVL Vesting", "VVN") {}

    /**
     * @dev Throws if called by any account other than the vesting contracts.
     */
    modifier onlyVestingContract() {
        require(isVestingContracts[msg.sender], "Wrong vesting contract");
        _;
    }

    event CreateVestingContract(
        address indexed vestingAddress,
        address deployer
    );

    /**
     * @notice Create Vesting contract
     * @param _tokenAddress Vesting Fund token address
     */
    function createVestingContract(IERC20 _tokenAddress) public {
        VTVLVesting vestingContract = new VTVLVesting(
            _tokenAddress,
            address(this),
            _nextTokenId()
        );

        isVestingContracts[address(vestingContract)] = true;

        emit CreateVestingContract(address(vestingContract), msg.sender);
    }

    /**
     * @notice Mint NFT
     * @param _receiver Address of receiver
     * @param _tokenId Id of NFT
     * @param _amount amount of NFT
     */
    function mint(address _receiver, uint256 _amount)
        external
        onlyVestingContract
    {
        _mint(_receiver, _amount);
    }

    // start token id will be 1
    function _startTokenId() private view override returns (uint256) {
        return 1;
    }

    // override baseURI function
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    // set baseURI
    function setBaseURI(string memory _baseURI) public onlyOwner {
        baseURI = _baseURI;
    }
}
