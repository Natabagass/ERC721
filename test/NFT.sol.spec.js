const { expect } = require("chai");
const { ethers } = require("hardhat");
const { int } = require("hardhat/internal/core/params/argumentTypes");

// var NFT = artifacts.require("NFT");

describe("NFT", () => {
    let nft;

    // beforeEach(async () => {
    //     const [owner, addr1] = await ethers.getSigners();

    //     const NFT = await ethers.getContractFactory("NFT");
    //     nft = await NFT.deploy();
    // })
    it("NFT Name: SuperNFT", async () => {
        const [owner, addr1] = await ethers.getSigners();

        const NFT = await ethers.getContractFactory("NFT");
        nft = await NFT.deploy();
        
        const expectedValue = "SuperNFT";
        const erc721Name = await nft.name();
        
        expect(erc721Name).to.equal(expectedValue);
    })

    it("NFT Symbol: SNFT", async () => {
        const [owner, addr1] = await ethers.getSigners();

        const NFT = await ethers.getContractFactory("NFT");
        nft = await NFT.deploy();

        const expectedValue = "SNFT";
        const erc721Symbol = await nft.symbol();

        expect(erc721Symbol).to.equal(expectedValue);
    })

    it('should be able to deploy and mint ERC721 token', async () => {
        const [owner, addr1] = await ethers.getSigners();

        const NFT = await ethers.getContractFactory("NFT");
        nft = await NFT.deploy();
        let tokenID =1;

        await nft.mintNFT()
        expect(await nft.ownerOf(tokenID)).to.equal(owner.address)
    })
})
