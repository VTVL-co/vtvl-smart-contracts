// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;

import "@openzeppelin/contracts/interfaces/IERC20.sol";

interface IERC20Extented is IERC20 {
    function decimals() external view returns (uint8);
}

interface IVestingFee {
    function setFee(uint256 _feePercent) external;

    function updateFeeReceiver(address _newReceiver) external;
}
