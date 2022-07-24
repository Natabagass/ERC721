require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
    solidity: "0.8.10",
    networks: {
        goerli: {
            url:`https://eth-goerli.alchemyapi.io/v2/{`process.env.ALCHEMY_API_KEY`}`,
            accounts: [`process.env.PRI_KEY`],
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};
