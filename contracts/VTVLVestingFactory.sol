// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.19;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./VTVLVesting.sol";

/// @title Vesting Factory contract
/// @notice Create Vesting contract

contract VTVLVestingFactory is Ownable {
    /**
     * @notice Initialize ERC1155
     * @dev tokenId will start from 1
     */
    constructor() {}

    event CreateVestingContract(
        address indexed vestingAddress,
        address deployer
    );

    /**
     * @notice Create Vesting contract
     * @param _tokenAddress Vesting Fund token address
     */
    function createVestingContract(IERC20 _tokenAddress) public {
        VTVLVesting vestingContract = new VTVLVesting(_tokenAddress);

        emit CreateVestingContract(address(vestingContract), msg.sender);
    }
}
