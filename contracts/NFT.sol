// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721, ERC721URIStorage, ERC721Burnable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint public val;

    constructor() ERC721("SuperNFT", "SNFT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://raw.githubusercontent.com/Natabagass/ERC721/main/item/metadata.json";
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory){
        return super.tokenURI(tokenId);
    }

    function mintNFT() public returns(uint256){
        _tokenIds.increment();
        uint256 tokenIDNFT = _tokenIds.current();
        _mint(msg.sender, tokenIDNFT);
        _setTokenURI(tokenIDNFT, "metadata.json");
        return tokenIDNFT;
    }
}