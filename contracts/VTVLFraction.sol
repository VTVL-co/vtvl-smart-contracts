//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.14;
// Note: using solidity 0.8, SafeMath not needed any more

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

/**
@notice NFT contract for fractions
 */
contract VTVLFraction is Ownable, ERC721A {
    // base token URI
    string baseURI;

    constructor() ERC721A("VTVL Fraction", "VVF") {}

    // tokenId will start from 1
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
