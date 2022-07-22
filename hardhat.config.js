require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
    solidity: "0.8.10",
    networks: {
        goerli: {
            url:`https://eth-goerli.alchemyapi.io/v2/SjDPi-6ydxeo8XlnPMxhVnTImAYCCuMn`,
            accounts: [`1919c97f199cd6ad7dad1c1e6b8f1378c1d070f9ee629ebc7757f76f752b6a78`],
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};
