const networkConfig: Record<number, any> = {
    11155111 : {
        name: "Sepolia",
        etherUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306"
    }
}

const developmentChains = ["hardhat", "localhost"];

const DECIMALS: number = 8, INITIAL_ANSWER: number = 2000;

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER
}