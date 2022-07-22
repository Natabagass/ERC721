import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { artifacts, ethers } from "hardhat";
import { Contract } from "ethers";

var superNFT = artifacts.artifactExists("NFT");

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
})
