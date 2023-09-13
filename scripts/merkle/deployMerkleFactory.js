const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const [deployer] = await ethers.getSigners();
  const VTVLVestingFactory = await ethers.getContractFactory(
    "VTVLMerkleVestingFactory"
  );
  const feeData = await deployer.provider.getFeeData();
  const nonce = await deployer.getTransactionCount();
  const pendingNonce = await deployer.getTransactionCount("pending");
  console.log("nonce", nonce);
  console.log("pendingNonce", pendingNonce);
  console.log("fee data", feeData);

  const vestingFactoryContract = await VTVLVestingFactory.deploy({
    nonce: nonce,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    maxFeePerGas: feeData.maxFeePerGas * 2,
  });

  // const vestingFactoryContract = await VTVLVestingFactory.deploy();
  // console.log(
  //   `vestingMerkleFactoryContract initialized on ${vestingFactoryContract.address}, waiting to be deployed...`
  // );
  const tx = await vestingFactoryContract.deployed();
  console.log(
    "Deployed a vesting contract to:",
    vestingFactoryContract.address
  );

  await tx.deployTransaction.wait();

  await hre.run("verify:verify", {
    address: vestingFactoryContract.address,
    contract: "contracts/VTVLMerkleVestingFactory.sol:VTVLMerkleVestingFactory",
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
