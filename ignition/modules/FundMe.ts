import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"
import { network } from "hardhat"

export default buildModule("FundMe", (m) => {
    const address = networkConfig[network.config.chainId || 31337]["etherUsdPriceFeed"]
    const fundMe = m.contract("FundMe", ["0x694AA1769357215DE4FAC081bf1f309aDC325306"])

    return { fundMe }
})
