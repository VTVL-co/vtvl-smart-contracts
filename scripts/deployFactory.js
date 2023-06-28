const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const feeData = await deployer.provider.getFeeData();
  const nonce = await deployer.getTransactionCount();
  console.log("nonce pending", nonce);

  const VTVLVestingFactory = await ethers.getContractFactory(
    "VTVLVestingFactory"
  );
  const vestingFactoryContract = await VTVLVestingFactory.deploy({
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    maxFeePerGas: feeData.maxFeePerGas * 2,
  });
  console.log(
    `vestingFactoryContract initialized on ${vestingFactoryContract.address}, waiting to be deployed...`
  );
  const tx = await vestingFactoryContract.deployed();
  console.log(
    "Deployed a vesting contract to:",
    vestingFactoryContract.address
  );

  await tx.deployTransaction.wait();

  // satoshi mainnet: 0xF4c7E49ebc9B6Cb38711BA977Ca9478ba1d59dA1
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
