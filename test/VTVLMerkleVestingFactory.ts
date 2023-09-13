import { expect } from "chai";
import { ethers, network } from "hardhat";
import Chance from "chance";
import { BigNumber } from "ethers";
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
import VestingJson from "./vesting";
import {
  TestERC20Token,
  VTVLMerkleVesting,
  VTVLMerkleVestingFactory,
} from "../typechain-types";
import { ClaimInputStruct } from "../typechain-types/contracts/merkleVesting/VTVLMerkelVesting";

const VaultFactoryJson = require("../artifacts/contracts/VTVLMerkleVestingFactory.sol/VTVLMerkleVestingFactory.json");

const iface = new ethers.utils.Interface(VaultFactoryJson.abi);

const chance = new Chance(43153); // Make sure we have a predictable seed for repeatability
const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const INCH_ADDRESS = "0x111111111117dc0aa78b770fa6a738034120c302";
const USDC_IMPERSONATE_ACCOUNT = "0xf3B0073E3a7F747C7A38B36B805247B222C302A3";
const INCH_IMPERSONATE_ACCOUNT = "0x3744da57184575064838bbc87a0fc791f5e39ea2";
const initialSupplyTokens = 1000;

const tokenName = chance.string({ length: 10 });
const tokenSymbol = chance.string({ length: 3 }).toUpperCase();

function generateMerkleTree() {
  const tree = StandardMerkleTree.of(VestingJson, [
    "uint40",
    "uint40",
    "uint40",
    "uint40",
    "uint40",
    "uint256",
    "uint256",
    "address",
  ]);

  fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));
}
generateMerkleTree();
function getMerkleProof(recipient: string, scheduleIndex = 0) {
  const tree = StandardMerkleTree.load(
    JSON.parse(fs.readFileSync("tree.json", "utf8"))
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

function getMerkleRoot() {
  const tree = StandardMerkleTree.load(
    JSON.parse(fs.readFileSync("tree.json", "utf8"))
  );
  return tree.root;
}

/**
 * Get the created vault address from the transaction
 * @returns vault address
 */
function getParamFromEvent(
  transaction: any,
  eventName: string,
  paramIndex: number
) {
  const logs = transaction.logs.filter((l: any) =>
    l.topics.includes(ethers.utils.id(eventName))
  );
  const event = iface.parseLog(logs[0]);
  return event.args[paramIndex];
}

const randomAddress = async () => {
  return await ethers.Wallet.createRandom().getAddress();
};

const getLastBlockTs = async () => {
  const blockNumBefore = await ethers.provider.getBlockNumber();
  const timestampBefore = await getBlockTs(blockNumBefore);
  return timestampBefore;
};

const getBlockTs = async (blockNumber: number) => {
  const blockBefore = await ethers.provider.getBlock(blockNumber);
  const timestampBefore = blockBefore.timestamp;
  return timestampBefore;
};

const createContractFactory = async () =>
  await ethers.getContractFactory("VTVLMerkleVestingFactory");

let factoryContract: VTVLMerkleVestingFactory;

const deployVestingContract = async (tokenAddress: string) => {
  const factory = await createContractFactory();
  factoryContract = await factory.deploy();
  await factoryContract.deployed();

  const transaction = await factoryContract.createVestingContract(
    tokenAddress ?? (await randomAddress()),
    0
  );

  const vestingContractAddress = getParamFromEvent(
    await transaction.wait(),
    "CreateVestingContract(address,address)",
    0
  );

  // TODO: check if we need any checks that the token be valid, etc
  const VestingContract = await ethers.getContractFactory("VTVLMerkleVesting");
  const contract = await VestingContract.attach(vestingContractAddress);
  return contract;
};

const dateToTs = (date: Date | string) =>
  ethers.BigNumber.from(
    Math.floor((date instanceof Date ? date : new Date(date)).getTime() / 1000)
  );

const createPrefundedVestingContract = async (props: {
  tokenName: string;
  tokenSymbol: string;
  initialSupplyTokens: number;
}) => {
  const { tokenName, tokenSymbol, initialSupplyTokens } = props;

  // Create an example token
  const tokenContractFactory = await ethers.getContractFactory(
    "TestERC20Token"
  );
  // const initialSupply = ethers.utils.parseUnits(initialSupplyTokens.toString(), decimals);
  const initialSupply = BigNumber.from(initialSupplyTokens); // The contract is already multiplying by decimals
  const tokenContract = await tokenContractFactory.deploy(
    tokenName,
    tokenSymbol,
    initialSupply
  );

  // Create an example vesting contract
  const vestingContract = await deployVestingContract(tokenContract.address);
  await vestingContract.deployed();

  expect(await vestingContract.tokenAddress()).to.be.equal(
    tokenContract.address
  );

  // Fund the vesting contract - transfer everything to the vesting contract (from the user)
  await tokenContract.transfer(
    vestingContract.address,
    await tokenContract.totalSupply()
  );

  return { tokenContract, vestingContract };
};

type VestingContractType = VTVLMerkleVesting;

describe("Contract creation", async function () {
  let tokenAddress: string;

  before(async () => {
    // TODO: check if we need any checks that the token be valid, etc
  });

  it("can be created with a ERC20 token address", async function () {
    tokenAddress = await randomAddress();
    const contract = await deployVestingContract(tokenAddress);
    await contract.deployed();

    expect(await contract.tokenAddress()).to.equal(tokenAddress);
  });

  it("fails if initialized without a valid ERC20 token address", async function () {
    // TODO: check if we need any checks that the token be valid, etc
    const zeroAddressStr = "0x" + "0".repeat(40);
    const [owner] = await ethers.getSigners();

    const invalidParamsSets = [
      undefined,
      null,
      0,
      "0x0",
      "0x11",
      zeroAddressStr,
    ];

    for (const invalidParam of invalidParamsSets) {
      try {
        const factory = await ethers.getContractFactory("VTVLMerkleVesting");
        // @ts-ignore - Need to ignore invalid type because initializing with an invalid type is the whole point of this test
        const contractDeploymentPromise = factory.deploy(
          invalidParam as string,
          0
        );

        if (invalidParam === zeroAddressStr) {
          await expect(contractDeploymentPromise).to.be.revertedWith(
            "INVALID_ADDRESS"
          );
        } else {
          try {
            await contractDeploymentPromise;
            expect(true).to.be.equal(
              false,
              `Invalid failure mode with argument ${invalidParam}.`
            );
          } catch (e) {
            // Correct failure mode
          }
        }
      } catch (e) {
        expect(true).to.be.equal(
          false,
          `Invalid failure mode with argument ${invalidParam}.`
        );
      }
    }
  });

  it("the deployer is the owner", async function () {
    const [owner] = await ethers.getSigners();
    tokenAddress = await randomAddress();

    const contract = await deployVestingContract(tokenAddress);

    expect(await contract.owner()).to.be.equal(owner.address);
  });
});

const claimInputs: ClaimInputStruct[] = VestingJson.map((vesting) => ({
  recipient: vesting[7] as string,
  startTimestamp: vesting[0],
  endTimestamp: vesting[1],
  cliffReleaseTimestamp: vesting[2],
  releaseIntervalSecs: vesting[3],
  linearVestAmount: vesting[5],
  scheduleIndex: vesting[4],
  cliffAmount: vesting[6],
}));

describe("Withdraw", async () => {
  let recipientAddress: string;
  let vestingContract: VestingContractType;
  let tokenContract: TestERC20Token;

  before(async () => {
    recipientAddress = await randomAddress();
    // TODO: check if we need any checks that the token be valid, etc
    const { tokenContract: tc, vestingContract: vc } =
      await createPrefundedVestingContract({
        tokenName,
        tokenSymbol,
        initialSupplyTokens,
      });
    vestingContract = vc;
    tokenContract = tc;
  });
  it("disallow withdraw with wrong vesting information", async () => {
    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );

    const proof = getMerkleProof(claimInputs[0].recipient);

    await ethers.provider.send("evm_mine", [
      BigNumber.from(BigNumber.from(claimInputs[0].startTimestamp))
        .add(150)
        .toNumber(),
    ]); // by now, we should've vested the cliff and one unlock interval

    await expect(
      vestingContract.withdraw(
        { ...claimInputs[0], linearVestAmount: 23 },
        proof
      )
    ).to.be.revertedWith("Invalid proof");
  });

  it("disallow withdraw with wrong recipient", async () => {
    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );
    const proof = getMerkleProof(claimInputs[0].recipient);

    await ethers.provider.send("evm_mine", [
      BigNumber.from(BigNumber.from(claimInputs[0].startTimestamp))
        .add(200)
        .toNumber(),
    ]); // by now, we should've vested the cliff and one unlock interval

    await expect(
      vestingContract.withdraw(
        { ...claimInputs[0], recipient: recipientAddress },
        proof
      )
    ).to.be.revertedWith("Invalid proof");
  });

  it("allows withdrawal up to the allowance and fails after the allowance is spent", async () => {
    const initialBalance = await tokenContract.balanceOf(
      claimInputs[0].recipient
    );

    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );
    const proof = getMerkleProof(claimInputs[0].recipient);
    await ethers.provider.send("evm_mine", [
      BigNumber.from(BigNumber.from(claimInputs[0].startTimestamp))
        .add(1000)
        .toNumber(),
    ]); // by now, we should've vested the cliff and one unlock interval

    const tx = await vestingContract.withdraw(claimInputs[0], proof);
    await tx.wait();

    const balanceAfterFirstWithdraw = await tokenContract.balanceOf(
      claimInputs[0].recipient
    );

    // The cliff has vested plus 10% of the linear vest amount
    expect(balanceAfterFirstWithdraw).to.be.equal(
      initialBalance
        .add(claimInputs[0].cliffAmount)
        .add(BigNumber.from(claimInputs[0].linearVestAmount).div(10))
    );

    await ethers.provider.send("evm_increaseTime", [17]); // Fast forward until the moment nothign further has vested
    // Now we don't have anything to withdraw again - as we've withdrawn just before the last vest
    await expect(
      vestingContract.withdraw(claimInputs[0], proof)
    ).to.be.revertedWith("NOTHING_TO_WITHDRAW");

    await ethers.provider.send("evm_increaseTime", [85]); // mine another one
    await (await vestingContract.withdraw(claimInputs[0], proof)).wait();
    const balanceAfterSecondWithdraw = await tokenContract.balanceOf(
      claimInputs[0].recipient
    );
    // Expect to have 10% more after the last withdraw
    expect(balanceAfterSecondWithdraw).to.be.equal(
      balanceAfterFirstWithdraw.add(
        BigNumber.from(claimInputs[0].linearVestAmount).div(100)
      )
    );
  });

  it("withdraw the vested amount after revoke claim", async () => {
    const { vestingContract } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });
    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );
    const timePass = 2000;
    await ethers.provider.send("evm_mine", [
      BigNumber.from(claimInputs[0].startTimestamp).add(timePass).toNumber(),
    ]);
    // Revoke the claim, and try to withdraw afterwards
    const proof = getMerkleProof(claimInputs[0].recipient);
    const tx = await vestingContract.revokeClaim(claimInputs[0], proof);
    await tx.wait();

    // Get `revokeClaim` transaction block timestamp
    // const txTimestamp = await getBlockTs(tx.blockNumber!);

    // Expect the claimable amount after revoking
    const expectClaimableAmount = BigNumber.from(
      claimInputs[0].cliffAmount
    ).add(BigNumber.from(claimInputs[0].linearVestAmount).div(5));

    expect(await vestingContract.claimableAmount(claimInputs[0])).to.be.equal(
      expectClaimableAmount
    );
  });
});

describe("Revoke Claim", async () => {
  it("allows admin to revoke a valid claim after withdraw", async () => {
    const { vestingContract } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });

    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );
    const proof = getMerkleProof(claimInputs[0].recipient);
    // await ethers.provider.send("evm_mine", [
    //   BigNumber.from(claimInputs[0].startTimestamp).toNumber() + 1000,
    // ]);
    await vestingContract.withdraw(claimInputs[0], proof);
    (await vestingContract.revokeClaim(claimInputs[0], proof)).wait();
    // Make sure it gets reverted
    expect(
      await await vestingContract.isRevoked(claimInputs[0].recipient, 0)
    ).to.be.equal(true);
  });

  it("fails to revoke an invalid proof", async () => {
    const { vestingContract } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });
    const recipientAddress = await randomAddress();
    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );
    const proof = getMerkleProof(claimInputs[0].recipient);

    await expect(
      vestingContract.revokeClaim(
        {
          ...claimInputs[0],
          recipient: recipientAddress,
        },
        proof
      )
    ).to.be.revertedWith("Invalid proof");
  });
});

describe("Vested amount", async () => {
  let vestingContract: VestingContractType;
  // Default params
  // linearly Vest 10000, every 1s, between TS 1000 and 2000
  // additionally, cliff vests another 5000, at TS = 900

  before(async () => {
    const { vestingContract: _vc } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });
    vestingContract = _vc as VestingContractType;
    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );
  });
  it("calculates the vested amount before the cliff time to be 0", async () => {
    expect(
      await vestingContract.vestedAmount(
        claimInputs[0],
        BigNumber.from(claimInputs[0].cliffReleaseTimestamp).sub(1)
      )
    ).to.be.equal(0);
  });
  it("calculates the vested amount at the cliff time to be equal cliff amount", async () => {
    // Note: at exactly the cliff time, linear vested amount won't yet come in play as we're only at second 0
    expect(
      await vestingContract.vestedAmount(
        claimInputs[0],
        claimInputs[0].cliffReleaseTimestamp
      )
    ).to.be.equal(claimInputs[0].cliffAmount);
  });
  it("correctly calculates the vested amount after the cliff time, but before the linear start time", async () => {
    // await ethers.provider.send("evm_mine", [
    //   (claimInputs[0].cliffReleaseTimestamp.toNumber()),
    // ]);
    expect(
      await vestingContract.vestedAmount(
        claimInputs[0],
        BigNumber.from(claimInputs[0].cliffReleaseTimestamp).add(1)
      )
    ).to.be.equal(claimInputs[0].cliffAmount);
    expect(
      await vestingContract.vestedAmount(
        claimInputs[0],
        BigNumber.from(claimInputs[0].startTimestamp).sub(1)
      )
    ).to.be.equal(claimInputs[0].cliffAmount);
  });
  it("vests correctly if cliff and linear vesting begin are at the same time", async () => {
    const { vestingContract } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });
    expect(
      await vestingContract.vestedAmount(
        claimInputs[1],
        BigNumber.from(claimInputs[1].startTimestamp)
      )
    ).to.be.equal(claimInputs[1].cliffAmount);
    // Half the interval past, we've vested the cliff and half the linear amount
    expect(
      await vestingContract.vestedAmount(
        claimInputs[1],
        BigNumber.from(claimInputs[1].startTimestamp).add(5000)
      )
    ).to.be.equal(
      BigNumber.from(claimInputs[1].cliffAmount).add(
        BigNumber.from(claimInputs[1].linearVestAmount).div(2)
      )
    );
  });

  it("correctly calculates the vested amount at the linear start time", async () => {
    // We've just released the cliff at the first second

    expect(
      await vestingContract.vestedAmount(
        claimInputs[0],
        BigNumber.from(claimInputs[0].startTimestamp)
      )
    ).to.be.equal(claimInputs[0].cliffAmount);
  });
  it("correctly calculates the vested amount after the fist release interval", async () => {
    const vestAmt = await vestingContract.vestedAmount(
      claimInputs[0],
      BigNumber.from(claimInputs[0].startTimestamp).add(100)
    );

    expect(vestAmt).to.be.equal(
      BigNumber.from(claimInputs[0].cliffAmount).add(100)
    );
  });
  [10, 25, 45, 50, 70, 80, 95].forEach((percentage) => {
    it(`correctly calculates the vested amount at ${percentage} of linear interval`, async () => {
      // Due to how our vesting is set up (length 1000, amount 10000), every 10*x a release of 100x should happen
      const vestAmt = await vestingContract.vestedAmount(
        claimInputs[0],
        BigNumber.from(claimInputs[0].startTimestamp).add(percentage * 100)
      );
      const expectedVestAmt = BigNumber.from(claimInputs[0].cliffAmount).add(
        BigNumber.from(claimInputs[0].linearVestAmount).mul(percentage).div(100)
      );
      expect(vestAmt).to.be.equal(expectedVestAmt);
    });
  });
  it("calculates the vested amount at the end of the linear interval to be the full amount allocated", async () => {
    // The full amount vested at the end
    expect(
      await vestingContract.vestedAmount(
        claimInputs[0],
        claimInputs[0].endTimestamp
      )
    ).to.be.equal(
      BigNumber.from(claimInputs[0].cliffAmount).add(
        claimInputs[0].linearVestAmount
      )
    );
  });
  it("doesn't vest further after the end of the linear interval", async () => {
    // Again the full amount even if we go a long way in the future
    expect(
      await vestingContract.vestedAmount(
        claimInputs[0],
        BigNumber.from(claimInputs[0].endTimestamp).add(100000000)
      )
    ).to.be.equal(
      BigNumber.from(claimInputs[0].cliffAmount).add(
        claimInputs[0].linearVestAmount
      )
    );
  });
  it("calculates the finalVestedAmount to be equal the total amount to be vested", async () => {
    expect(await vestingContract.finalVestedAmount(claimInputs[0])).to.be.equal(
      BigNumber.from(claimInputs[0].cliffAmount).add(
        claimInputs[0].linearVestAmount
      )
    );
  });
  it("takes the release interval into account", async () => {
    const vestedAtStart = await vestingContract.vestedAmount(
      claimInputs[2],
      BigNumber.from(claimInputs[2].startTimestamp)
    );
    expect(vestedAtStart).to.be.equal(claimInputs[2].cliffAmount);
    // Just before the release interval gets triggered, we should still get just the cliff ts
    expect(
      await vestingContract.vestedAmount(
        claimInputs[2],
        BigNumber.from(claimInputs[2].startTimestamp)
          .add(BigNumber.from(claimInputs[2].releaseIntervalSecs))
          .sub(1)
      )
    ).to.be.equal(claimInputs[2].cliffAmount);
    // // at the release interval (release interval + 1 added, expect half of the linear vested amt)
    // expect(
    //   await vestingContract.vestedAmount(
    //     claimInputs[2],
    //     BigNumber.from(claimInputs[2].startTimestamp).add(
    //       BigNumber.from(claimInputs[2].releaseIntervalSecs)
    //     )
    //   )
    // ).to.be.equal(
    //   BigNumber.from(claimInputs[2].cliffAmount).add(
    //     BigNumber.from(claimInputs[2].linearVestAmount).div(2)
    //   )
    // );
    // // Expect everything at the end
    // expect(
    //   await vestingContract.vestedAmount(
    //     claimInputs[2],
    //     claimInputs[2].endTimestamp
    //   )
    // ).to.be.equal(
    //   BigNumber.from(claimInputs[2].cliffAmount).add(
    //     claimInputs[2].linearVestAmount
    //   )
    // );
  });
});
describe("Claimable amount", async () => {
  before(async () => {});
  it(`calculates the claimable amount`, async () => {
    const snapshotId = await ethers.provider.send("evm_snapshot", []);

    const { vestingContract } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });

    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );
    const claim = claimInputs[0];

    // after padding the half of vesting period
    const ts = BigNumber.from(claim.startTimestamp).add(5000).toNumber();
    await ethers.provider.send("evm_mine", [ts]); // Make sure we're at the relevant ts
    const vestedAmount = BigNumber.from(claim.cliffAmount).add(
      BigNumber.from(claim.linearVestAmount).div(2)
    );
    const claimableAmount = await vestingContract.claimableAmount(claim);
    expect(claimableAmount).to.be.equal(vestedAmount);

    await ethers.provider.send("evm_revert", [snapshotId]);
  });
  it(`calculates the claimable amount to be equal to the vested amount if we have no withdrawals`, async () => {
    const snapshotId = await ethers.provider.send("evm_snapshot", []);

    const startTimestamp =
      (await ethers.provider.getBlock(await ethers.provider.getBlockNumber()))
        .timestamp + 100;
    const endTimestamp = BigNumber.from(claimInputs[0].endTimestamp).toNumber();
    const { vestingContract } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });

    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );
    // Try couple of different points, no matter where we are, it should be the same since we have no withdrawals
    for (let ts = startTimestamp; ts <= endTimestamp; ts += 100) {
      await ethers.provider.send("evm_mine", [ts]); // Make sure we're at the relevant ts
      const vestAmt = await vestingContract.vestedAmount(claimInputs[0], ts);
      const claimableAmount = await vestingContract.claimableAmount(
        claimInputs[0]
      );
      expect(claimableAmount).to.be.equal(vestAmt);
    }

    await ethers.provider.send("evm_revert", [snapshotId]);
  });
  it("takes withdrawals into account when calculating the claimable amount", async () => {
    const [, owner2] = await ethers.getSigners();
    const snapshotId = await ethers.provider.send("evm_snapshot", []);

    const startTimestamp = BigNumber.from(claimInputs[0].startTimestamp);
    const endTimestamp = BigNumber.from(claimInputs[0].endTimestamp).toNumber();
    const { vestingContract } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });
    const proof = getMerkleProof(claimInputs[0].recipient);

    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );

    const ts = startTimestamp.add(5000).toNumber();

    await ethers.provider.send("evm_mine", [ts]); // Make sure we're at half of the interval
    // const amtFirstWithdraw = vestingContract.vestedAmount(owner2.address, ts);
    // second owner withdraws
    const tx = await vestingContract
      .connect(owner2)
      .withdraw(claimInputs[0], proof);

    // TODO: fetch the withdraw amount in a better way
    const amtFirstWithdraw = (await tx.wait()).events?.[3]?.args
      ?._withdrawalAmount;
    // Nothing should be claimable

    expect(await vestingContract.claimableAmount(claimInputs[0])).to.be.equal(
      0
    );
    // now wait a bit till the end of the interval for everything to get vested
    await ethers.provider.send("evm_mine", [endTimestamp]);
    // we expect the claimble be less than vested for the amt withdrawn
    const vestAmtEnd = await vestingContract.finalVestedAmount(claimInputs[0]);
    const expectedClaimable = vestAmtEnd.sub(amtFirstWithdraw);

    expect(await vestingContract.claimableAmount(claimInputs[0])).to.be.equal(
      expectedClaimable
    );

    await ethers.provider.send("evm_revert", [snapshotId]);
  });

  it("should calculate claimable amount for the second schedule after the first schedule withdraw", async () => {
    const [, owner2] = await ethers.getSigners();

    const startTimestamp = BigNumber.from(claimInputs[0].startTimestamp);
    const endTimestamp = BigNumber.from(claimInputs[0].endTimestamp).toNumber();
    const { vestingContract } = await createPrefundedVestingContract({
      tokenName,
      tokenSymbol,
      initialSupplyTokens,
    });

    const proof = getMerkleProof(claimInputs[0].recipient);

    await factoryContract.setMerkleRoot(
      vestingContract.address,
      getMerkleRoot()
    );

    const ts = startTimestamp.add(5000).toNumber();
    await ethers.provider.send("evm_mine", [ts]); // Make sure we're at half of the interval
    // const amtFirstWithdraw = vestingContract.vestedAmount(owner2.address, ts);
    // second owner withdraws
    const tx = await vestingContract
      .connect(owner2)
      .withdraw(claimInputs[0], proof);

    // we expect the claimble be less than vested for the amt withdrawn
    await ethers.provider.send("evm_mine", [endTimestamp]);
    const vestAmtEnd = await vestingContract.finalVestedAmount(claimInputs[1]);

    expect(await vestingContract.claimableAmount(claimInputs[1])).to.be.equal(
      vestAmtEnd
    );
  });
});
