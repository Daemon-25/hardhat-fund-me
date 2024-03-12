import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "hardhat-gas-reporter"
import "dotenv/config"
import "solidity-coverage"
import "hardhat-deploy"
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {version: "0.8.24"},
      {version: "0.8.0"}
    ]
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia: {
      chainId: 11155111,
      accounts: [process.env.SEPOLIA_ACCOUNT_PRIVATE_KEY ?? ""],
      url: process.env.ALCHEMY_URL,
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
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
};

export default config;
