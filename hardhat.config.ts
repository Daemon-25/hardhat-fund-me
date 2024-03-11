import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config"
import "@nomicfoundation/hardhat-ignition-ethers";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {version: "0.8.24"},
      {version: "0.8.0"}
    ]
  },
  networks: {
    hardhat: {},
    sepolia: {
      chainId: 11155111,
      accounts: [process.env.SEPOLIA_ACCOUNT_PRIVATE_KEY ?? ""],
      url: process.env.ALCHEMY_URL
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKET_API_KEY
  }
};

export default config;
