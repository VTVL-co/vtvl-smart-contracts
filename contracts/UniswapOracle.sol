//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Factory.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@uniswap/v3-periphery/contracts/libraries/OracleLibrary.sol";

interface IERC20Extented is IERC20 {
    function decimals() external view returns (uint8);
}

contract UniswapOracle {
    /**
    @notice Address of the token that we're vesting
     */
    IERC20Extented public immutable tokenAddress;
    uint256 public immutable tokenDecimal;

    // USDC contract address
    address public constant USDC_ADDRESS =
        0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    uint256 public constant USDC_DECIMAL = 6;

    // UniswapV3 Factory address
    address public constant UNISWAP_V3_FACTORY_ADDRESS =
        0x1F98431c8aD98523631AE4a59f267346ea31F984;

    // pool address for USDC vs Token using Uniswap factory contract
    address public immutable pool;
    bytes4 private constant FUNC_SELECTOR =
        bytes4(keccak256("getPool(address,address,uint256)"));

    constructor(IERC20Extented _tokenAddress) {
        require(address(_tokenAddress) != address(0), "INVALID_ADDRESS");
        tokenAddress = _tokenAddress;
        tokenDecimal = IERC20Extented(tokenAddress).decimals();
        pool = IUniswapV3Factory(UNISWAP_V3_FACTORY_ADDRESS).getPool(
            address(tokenAddress),
            USDC_ADDRESS,
            500
        );
    }

    // get the price of the token that will be calculated by 100 times.
    function getTokenPrice(
        uint128 amount,
        uint32 secondsAgo
    ) public view returns (uint amountOut) {
        (int24 tick, ) = OracleLibrary.consult(pool, secondsAgo);
        amountOut = OracleLibrary.getQuoteAtTick(
            tick,
            amount,
            USDC_ADDRESS,
            address(tokenAddress)
        );

        // calculate the price with 100 times
        return
            ((amountOut * 100) / 10 ** (tokenDecimal - USDC_DECIMAL)) / amount;
    }
}
