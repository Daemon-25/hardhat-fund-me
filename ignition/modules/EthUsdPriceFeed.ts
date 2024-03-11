import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"
import { network } from "hardhat"
import { developmentChains, DECIMALS, INITIAL_ANSWER } from "../../helper-hardhat-config";

export default buildModule("Mock", (m) => {
    let fundMe;
    if(developmentChains.includes(network.name)) {
        console.log("Deploying Mock Aggregator");
        fundMe = m.contract("MockV3Aggregator", [DECIMALS, INITIAL_ANSWER])
    };

    return { fundMe }
})
