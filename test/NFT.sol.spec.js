const { expect } = require("chai");
const { ethers } = require("hardhat");

// var NFT = artifacts.require("NFT");

describe("NFT", () => {
    let nft;

    beforeEach(async () => {
        const [owner, otherAccount] = await ethers.getSigners();

        const NFT = await ethers.getContractFactory("NFT");
        nft = await NFT.deploy();
    })
    it("NFT Name: SuperNFT", async () => {
        const expectedValue = "SuperNFT";
        const erc721Name = await nft.name();
        
        expect(erc721Name).to.equal(expectedValue);
    })

    it("NFT Symbol: SNFT", async () => {
        const expectedValue = "SNFT";
        const erc721Symbol = await nft.symbol();

        expect(erc721Symbol).to.equal(expectedValue);
    })

    it ("Value = value"), async () => {
        const expectedValue = _val;
        const _val = await nft.intialize();

        expect(_val).to.equal(expectedValue);
    }

    it ("URI"), async () => {
        const expectedValue = "https://raw.githubusercontent.com/2pai/nft-erc721/main/item/";
        const tokenURI = await nft._baseURI();

        expect(tokenURI).to.equal(expectedValue);
    }

    it ("burn"), async () => {
        const expectedValue = tokenID;
        const burnable = await nft._burn();

        expect(burnable).to.equal(expectedValue);
    }

    // it(' should be able to deploy and mint ERC721 token', async () => {
    //     nft = await NFT.new(nft.name(), nft.symbol())
    //     await nft.mintUniqueTokenTo(account, tokenId, tokenUri, {from: accounts[0]})

    //     expect(await nft.symbol()).to.equal(nft.symbol())
    //     expect(await nft.name()).to.equal(nft.name())
    // })
})
