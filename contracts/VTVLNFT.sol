//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;
// Note: using solidity 0.8, SafeMath not needed any more

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract VTVLNFT is Ownable, ERC721A {
    // base token URI
    string baseURI;

    //
    /**
    @notice Construct the contract, taking the ERC20 token to be vested as the parameter.
    @dev The owner can set the contract in question when creating the contract.
     */
    constructor() ERC721A("VTVL Vesting", "VVN") {}

    // start token id will be 1
    function _startTokenId() internal pure override returns (uint256) {
        return 1;
    }

    // override baseURI function
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    // set baseURI
    function setBaseURI(string memory baseURI_) public onlyOwner {
        baseURI = baseURI_;
    }
}
