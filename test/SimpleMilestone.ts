import { expect } from "chai";
import { ethers } from "hardhat";
import Chance from "chance";
import {
  SimpleMilestone,
  TestERC20Token,
  VTVLMilestoneFactory,
} from "../typechain";
import { parseEther } from "ethers/lib/utils";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
const MilestoneFactoryJson = require("../artifacts/contracts/VTVLMilestoneFactory.sol/VTVLMilestoneFactory.json");

const iface = new ethers.utils.Interface(MilestoneFactoryJson.abi);

const chance = new Chance(43153); // Make sure we have a predictable seed for repeatability

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

const createContractFactory = async () =>
  await ethers.getContractFactory("VTVLMilestoneFactory");

let factoryContract: VTVLMilestoneFactory;
const totalAllocation = parseEther("10000");
const allocationPercents = [10, 40, 50];
const tokenName = chance.string({ length: 10 });
const tokenSymbol = chance.string({ length: 3 }).toUpperCase();
// const releaseIntervalSecs = BigNumber.from(60 * 60); // 1 hour
// const vestingPeriod = releaseIntervalSecs.mul(100);

const deployTestToken = async () => {
  // Create an example token
  const tokenContractFactory = await ethers.getContractFactory(
    "TestERC20Token"
  );
  const tokenContract = await tokenContractFactory.deploy(
    tokenName,
    tokenSymbol,
    totalAllocation
  );
  await tokenContract.deployed();
  return tokenContract;
};

const createSimpleMilestone = async (
  tokenContract: TestERC20Token,
  recipient: string
) => {
  const factory = await createContractFactory();
  factoryContract = await factory.deploy();
  await factoryContract.deployed();

  await tokenContract.approve(factoryContract.address, totalAllocation);

  const transaction = await factoryContract.createSimpleMilestones(
    tokenContract.address,
    totalAllocation,
    allocationPercents,
    recipient
  );

  const milestoneContractAddress = getParamFromEvent(
    await transaction.wait(),
    "CreateMilestoneContract(address,address)",
    0
  );

  // TODO: check if we need any checks that the token be valid, etc
  const MilestoneContract = await ethers.getContractFactory("SimpleMilestone");
  const contract = await MilestoneContract.attach(milestoneContractAddress);
  return contract;
};

describe("Contract creation with fund", async function () {
  let tokenContract: TestERC20Token;
  let owner: SignerWithAddress,
    other: SignerWithAddress,
    recipient: SignerWithAddress;
  let contract: SimpleMilestone;

  before(async () => {
    [owner, other, recipient] = await ethers.getSigners();
    tokenContract = await deployTestToken();

    contract = await createSimpleMilestone(tokenContract, recipient.address);
  });

  it("check token address", async function () {
    expect(await contract.tokenAddress()).to.equal(tokenContract.address);
  });

  it("the deployer is the owner", async function () {
    expect(await contract.owner()).to.be.equal(owner.address);
  });

  it("should not completed when deployed", async function () {
    expect(await contract.isCompleted(0)).to.be.equal(false);
  });

  it("should only owner can mark isCompleted", async function () {
    await expect(contract.connect(other).setComplete(0)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );

    await contract.setComplete(0);
    expect(await contract.isCompleted(0)).to.be.equal(true);
  });

  it("should not completed if already completed", async function () {
    await expect(contract.setComplete(0)).to.be.revertedWith(
      "ALREADY_COMPLETED"
    );
  });

  it("should claimable amount be same as allocation when completed", async function () {
    expect(await contract.claimableAmount(0)).to.be.equal(
      totalAllocation.mul(allocationPercents[0]).div(100)
    );
  });

  it("should claimable amount be 0 when not completed", async function () {
    expect(await contract.isCompleted(1)).to.be.equal(false);
    expect(await contract.claimableAmount(1)).to.be.equal(0);
  });

  it("should only recipient can withdraw", async function () {
    await expect(contract.connect(other).withdraw(0)).to.be.revertedWith(
      "NO_RECIPIENT"
    );
  });

  it("should recipient withdraw", async function () {
    await expect(() =>
      contract.connect(recipient).withdraw(0)
    ).to.changeTokenBalance(
      tokenContract,
      recipient,
      totalAllocation.mul(allocationPercents[0]).div(100)
    );
  });

  it("should can withdraw when completed", async function () {
    await expect(contract.connect(recipient).withdraw(1)).to.be.revertedWith(
      "NOT_COMPLETED"
    );
  });

  it("should admin withdraw uncompleted allocations", async function () {
    await expect(() => contract.withdrawAdmin()).to.changeTokenBalance(
      tokenContract,
      owner,
      totalAllocation.sub(totalAllocation.mul(allocationPercents[0]).div(100))
    );
  });
});
