const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const { ethers } = require("hardhat");
const fs = require("fs");

const csvToJson = require("csvtojson");
const { parseEther } = require("ethers/lib/utils");

const startTime = 1693491435;
const endTime = startTime + 604800;
const releaseFrequency = 30;

async function generateMerkleTree() {
  let whitelist = await csvToJson({
    trim: true,
  }).fromFile("./scripts/merkle/vesting.csv");

  let counts = {};
  const vestings = whitelist.map((list) => {
    if (counts[list.address] !== undefined) {
      counts[list.address]++;
    } else {
      counts[list.address] = 0;
    }
    return [
      startTime,
      endTime,
      startTime,
      releaseFrequency,
      counts[list.address],
      parseEther(list.allocation),
      0,
      list.address,
    ];
  });
  console.log({ vestings });

  const tree = StandardMerkleTree.of(vestings, [
    "uint40",
    "uint40",
    "uint40",
    "uint40",
    "uint40",
    "uint256",
    "uint256",
    "address",
  ]);

  fs.writeFileSync("./scripts/merkle/tree.json", JSON.stringify(tree.dump()));
}

function getMerkleRoot() {
  const tree = StandardMerkleTree.load(
    JSON.parse(fs.readFileSync("./scripts/merkle/tree.json", "utf8"))
  );
  return tree.root;
}

function getMerkleProof(recipient, scheduleIndex = 0) {
  const tree = StandardMerkleTree.load(
    JSON.parse(fs.readFileSync("./scripts/merkle/tree.json", "utf8"))
  );

  let index = 0;
  for (const [i, v] of tree.entries()) {
    if (v[7].toLowerCase() === recipient.toLowerCase()) {
      const proof = tree.getProof(i);
      if (index === scheduleIndex) return proof;
      index++;
    }
  }
  return [];
}

async function main() {
  // We get the contract to deploy
  const contractAddress = "0xa0ceF81426942002A2d2892060AE9d0b001eFF1A";
  generateMerkleTree();
  const [deployer] = await ethers.getSigners();
  const root = getMerkleRoot();

  const VTVLVestingFactory = await ethers.getContractFactory(
    "VTVLMerkleVestingFactory"
  );
  const vestingFactoryContract = await VTVLVestingFactory.attach(
    "0xb37FEAb80606a43F1C9C7E9679e43733ca35e974"
  );
  const feeData = await deployer.provider.getFeeData();
  const nonce = await deployer.getTransactionCount();
  await vestingFactoryContract.setMerkleRoot(contractAddress, root, {
    nonce: nonce,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    maxFeePerGas: feeData.maxFeePerGas * 2,
  });

  console.log({ root });

  let whitelist = await csvToJson({
    trim: true,
  }).fromFile("./scripts/merkle/vesting.csv");

  let counts = {};
  const vestings = whitelist.map((list) => {
    if (counts[list.address] !== undefined) {
      counts[list.address]++;
    } else {
      counts[list.address] = 0;
    }
    return [
      startTime,
      endTime,
      startTime,
      releaseFrequency,
      counts[list.address],
      parseEther(list.allocation),
      0,
      list.address,
    ];
  });

  const claimInputs = vestings.map((vesting) => ({
    recipient: vesting[7],
    startTimestamp: vesting[0],
    endTimestamp: vesting[1],
    cliffReleaseTimestamp: vesting[2],
    releaseIntervalSecs: vesting[3],
    linearVestAmount: vesting[5],
    scheduleIndex: vesting[4],
    cliffAmount: vesting[6],
  }));

  try {
    const VTVLVesting = await ethers.getContractFactory("VTVLMerkleVesting");
    const vestingContract = await VTVLVesting.attach(contractAddress);
    const claimableAmount = await vestingContract.claimableAmount(
      claimInputs[0]
    );
    console.log({ claimableAmount });

    // const proof = getMerkleProof(
    //   claimInputs[0].recipient,
    //   claimInputs[0].scheduleIndex
    // );
    // console.log({ proof });

    // await vestingContract.withdraw(claimInputs[2], proof);
  } catch (err) {
    console.log(err);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
