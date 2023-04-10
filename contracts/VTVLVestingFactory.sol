// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./VTVLVesting.sol";

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
    function createVestingContract(IERC20 _tokenAddress) public {
        VTVLVesting vestingContract = new VTVLVesting(
            _tokenAddress,
            msg.sender
        );

        emit CreateVestingContract(address(vestingContract), msg.sender);
    }
}
