//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Mint everything at once
// VariableSupplyERC20Token could be used instead, but it needs to track available to mint supply (extra slot)
contract FullPremintERC20Token is ERC20 {
    // uint constant _initialSupply = 100 * (10**18);
    address public deployer;
    bool public burnable;

    uint256 public burntSupply;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 supply_,
        bool burnable_
    ) ERC20(name_, symbol_) {
        require(supply_ > 0, "NO_ZERO_MINT");
        _mint(_msgSender(), supply_);
        deployer = _msgSender();
        burnable = burnable_;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyDeployer() {
        require(deployer == _msgSender(), "Only deployer can burn");
        _;
    }

    /**
     * @dev Throws if burnable is false.
     */
    modifier onlyBurnable() {
        require(burnable, "Not available to burn");
        _;
    }

    function burn(uint256 amount) public virtual onlyDeployer onlyBurnable {
        _burn(_msgSender(), amount);
        burntSupply += amount;
    }
}
