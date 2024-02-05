require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const {PRIVATE_KEY}=process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    xdc: {
      url: "https://rpc.ankr.com/xdc_testnet",
      accounts: [PRIVATE_KEY]
    }
  }
};
