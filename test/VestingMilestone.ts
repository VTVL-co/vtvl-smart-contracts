import { expect } from "chai";
import { ethers } from "hardhat";
import Chance from "chance";
import {
  VestingMilestone,
  TestERC20Token,
  VTVLMilestoneFactory,
} from "../typechain";
import { parseEther } from "ethers/lib/utils";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
// import { beforeEach } from "mocha";
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

const getBlockTs = async (blockNumber: number) => {
  const blockBefore = await ethers.provider.getBlock(blockNumber);
  const timestampBefore = blockBefore.timestamp;
  return timestampBefore;
};

const getLastBlockTs = async () => {
  const blockNumBefore = await ethers.provider.getBlockNumber();
  const timestampBefore = await getBlockTs(blockNumBefore);
  return timestampBefore;
};

const createContractFactory = async () =>
  await ethers.getContractFactory("VTVLMilestoneFactory");

let factoryContract: VTVLMilestoneFactory;
const initialSupply = 10000;
const totalAllocation = parseEther(initialSupply.toString());
const allocationPercents = [10, 40, 50];
const releaseIntervalSecs = BigNumber.from(60 * 60); // 1 hour
const vestingPeriod = releaseIntervalSecs.mul(100);

const milestones = [
  {
    percent: 10,
    period: vestingPeriod,
    releaseIntervalSecs,
  },
  {
    percent: 40,
    period: vestingPeriod.mul(3),
    releaseIntervalSecs: releaseIntervalSecs.mul(2),
  },
  {
    percent: 50,
    period: vestingPeriod,
    releaseIntervalSecs,
  },
];

const tokenName = chance.string({ length: 10 });
const tokenSymbol = chance.string({ length: 3 }).toUpperCase();

const deployTestToken = async () => {
  // Create an example token
  const tokenContractFactory = await ethers.getContractFactory(
    "TestERC20Token"
  );
  const tokenContract = await tokenContractFactory.deploy(
    tokenName,
    tokenSymbol,
    initialSupply
  );
  await tokenContract.deployed();
  return tokenContract;
};

const createVestingMilestone = async (
  tokenContract: TestERC20Token,
  recipients: string[]
) => {
  const factory = await createContractFactory();
  factoryContract = await factory.deploy();
  await factoryContract.deployed();

  await tokenContract.approve(factoryContract.address, totalAllocation);

  const transaction = await factoryContract.createVestingMilestone(
    tokenContract.address,
    totalAllocation,
    milestones,
    recipients
  );

  const milestoneContractAddress = getParamFromEvent(
    await transaction.wait(),
    "CreateMilestoneContract(address,address)",
    0
  );

  // TODO: check if we need any checks that the token be valid, etc
  const MilestoneContract = await ethers.getContractFactory("VestingMilestone");
  const contract = await MilestoneContract.attach(milestoneContractAddress);
  return contract;
};

const randomAddress = async () => {
  return await ethers.Wallet.createRandom().getAddress();
};

describe("Milestone Based Vesting Contract creation with fund", async function () {
  let tokenContract: TestERC20Token;
  let owner: SignerWithAddress,
    other: SignerWithAddress,
    recipient: SignerWithAddress;
  let contract: VestingMilestone;

  before(async () => {
    [owner, other, recipient] = await ethers.getSigners();
    tokenContract = await deployTestToken();

    contract = await createVestingMilestone(tokenContract, [recipient.address]);
  });

  it("should not create contract if invalid IERC20 token", async function () {
    const tokenAddress = await randomAddress();
    await expect(
      factoryContract.createVestingMilestone(
        tokenAddress,
        totalAllocation,
        milestones,
        [recipient.address]
      )
    ).to.be.reverted;
  });

  it("check token address", async function () {
    expect(await contract.tokenAddress()).to.equal(tokenContract.address);
  });

  it("the deployer is the owner", async function () {
    expect(await contract.owner()).to.be.equal(owner.address);
  });

  it("should not completed when deployed", async function () {
    expect(await contract.isCompleted(recipient.address, 0)).to.be.equal(false);
  });

  it("should only owner can mark isCompleted", async function () {
    await expect(
      contract.connect(other).setComplete(recipient.address, 0)
    ).to.be.revertedWith("Ownable: caller is not the owner");

    await contract.setComplete(recipient.address, 0);
    expect(await contract.isCompleted(recipient.address, 0)).to.be.equal(true);
  });

  it("should not completed if already completed", async function () {
    await expect(contract.setComplete(recipient.address, 0)).to.be.revertedWith(
      "ALREADY_COMPLETED"
    );
  });

  it("should final vested amount be same as allocation", async function () {
    expect(await contract.finalVestedAmount(recipient.address, 0)).to.be.equal(
      totalAllocation.mul(allocationPercents[0]).div(100)
    );
  });

  it("should only recipient can withdraw", async function () {
    await expect(
      contract.connect(other).withdraw(recipient.address)
    ).to.be.revertedWith("NO_MILESTONE");
  });

  it("should admin withdraw uncompleted allocations", async function () {
    await expect(() => contract.withdrawAdmin()).to.changeTokenBalance(
      tokenContract,
      owner,
      totalAllocation.sub(totalAllocation.mul(allocationPercents[0]).div(100))
    );
  });
});

const amountPerInterval = (milestoneIndex: number) => {
  return totalAllocation
    .mul(milestones[milestoneIndex].percent)
    .div(100)
    .mul(milestones[milestoneIndex].releaseIntervalSecs)
    .div(milestones[milestoneIndex].period);
};

describe("Milestone Based Vesting Contract claim", async function () {
  let tokenContract: TestERC20Token;
  let recipient: SignerWithAddress;
  let contract: VestingMilestone;

  beforeEach(async () => {
    [, , recipient] = await ethers.getSigners();
    tokenContract = await deployTestToken();

    contract = await createVestingMilestone(tokenContract, [recipient.address]);
  });

  it("should claimable amount be 0 when not completed", async function () {
    expect(await contract.isCompleted(recipient.address, 1)).to.be.equal(false);
    expect(await contract.claimableAmount(recipient.address, 1)).to.be.equal(0);
  });

  it("should calculate claimable amount after 10 hours passed", async function () {
    await contract.setComplete(recipient.address, 0);
    const startTimestamp = (await getLastBlockTs()) + 100;
    const endTimestamp = startTimestamp + 10 * 3600;

    // 10 hours passed after completed
    await ethers.provider.send("evm_mine", [endTimestamp]);

    const intervals = BigNumber.from(3600 * 10).div(
      milestones[0].releaseIntervalSecs
    );
    expect(
      (await contract.claimableAmount(recipient.address, 0)).toString()
    ).to.be.equal(amountPerInterval(0).mul(intervals).toString());
  });

  it("should recipient withdraw correct amount from milestone 0", async function () {
    await contract.setComplete(recipient.address, 0);
    const startTimestamp = (await getLastBlockTs()) + 100;
    const endTimestamp = startTimestamp + 10 * 3600;

    // 10 hours passed after completed
    await ethers.provider.send("evm_mine", [endTimestamp]);

    const intervals = BigNumber.from(3600 * 10).div(
      milestones[0].releaseIntervalSecs
    );
    await expect(() =>
      contract.connect(recipient).withdraw(0)
    ).to.changeTokenBalance(
      tokenContract,
      recipient,
      amountPerInterval(0).mul(intervals)
    );
  });

  it("should recipient withdraw correct amount from milestone 1", async function () {
    await contract.setComplete(recipient.address, 1);
    const startTimestamp = (await getLastBlockTs()) + 100;
    const endTimestamp = startTimestamp + 10 * 3600;

    // 10 hours passed after completed
    await ethers.provider.send("evm_mine", [endTimestamp]);

    const intervals = BigNumber.from(3600 * 10).div(
      milestones[1].releaseIntervalSecs
    );
    await expect(() =>
      contract.connect(recipient).withdraw(1)
    ).to.changeTokenBalance(
      tokenContract,
      recipient,
      amountPerInterval(1).mul(intervals)
    );
  });

  it("should recipient withdraw same amount with claimable amount", async function () {
    await contract.setComplete(recipient.address, 1);
    const startTimestamp = (await getLastBlockTs()) + 100;
    const endTimestamp = startTimestamp + 10 * 3600;

    // 10 hours passed after completed
    await ethers.provider.send("evm_mine", [endTimestamp]);

    const claimableAmount = await contract.claimableAmount(
      recipient.address,
      1
    );
    await expect(() =>
      contract.connect(recipient).withdraw(1)
    ).to.changeTokenBalance(tokenContract, recipient, claimableAmount);
  });

  it("should not claim after claim", async function () {
    await contract.setComplete(recipient.address, 0);
    const startTimestamp = (await getLastBlockTs()) + 100;
    const endTimestamp = startTimestamp + 10 * 3600;

    // 10 hours passed after completed
    await ethers.provider.send("evm_mine", [endTimestamp]);

    await contract.connect(recipient).withdraw(0);
    await expect(contract.connect(recipient).withdraw(0)).to.be.revertedWith(
      "NOTHING_TO_WITHDRAW"
    );
  });

  it("should not claim unless completed", async function () {
    const startTimestamp = (await getLastBlockTs()) + 100;
    const endTimestamp = startTimestamp + 10 * 3600;

    // 10 hours passed after completed
    await ethers.provider.send("evm_mine", [endTimestamp]);

    await expect(contract.connect(recipient).withdraw(1)).to.be.revertedWith(
      "NOT_COMPLETED"
    );
  });

  it("should claim all allocation after period", async function () {
    await contract.setComplete(recipient.address, 0);
    const startTimestamp = (await getLastBlockTs()) + 100;

    // vesting period ended
    await ethers.provider.send("evm_mine", [
      startTimestamp + milestones[0].period.toNumber() + 10,
    ]);

    await expect(() =>
      contract.connect(recipient).withdraw(0)
    ).to.changeTokenBalance(
      tokenContract,
      recipient,
      totalAllocation.mul(allocationPercents[0]).div(100)
    );
  });
});

describe("Milestone Based Contract creation without fund", async function () {
  let tokenContract: TestERC20Token;
  let owner: SignerWithAddress,
    other: SignerWithAddress,
    recipient: SignerWithAddress;
  let contract: VestingMilestone;

  before(async () => {
    [owner, other, recipient] = await ethers.getSigners();
    tokenContract = await deployTestToken();

    // transfer all tokens to other
    await tokenContract.transfer(other.address, totalAllocation);

    contract = await createVestingMilestone(tokenContract, [recipient.address]);
  });

  it("should the balance of milestone contract is 0", async function () {
    expect(await tokenContract.balanceOf(contract.address)).to.be.equal(
      BigNumber.from(0)
    );
  });

  it("the deployer is the owner", async function () {
    expect(await contract.owner()).to.be.equal(owner.address);
  });

  it("should not completed when deployed", async function () {
    expect(await contract.isCompleted(recipient.address, 0)).to.be.equal(false);
  });

  it("should not set the complete if not deposited", async function () {
    await expect(contract.setComplete(recipient.address, 0)).to.be.revertedWith(
      "NOT_DEPOSITED"
    );
  });

  it("should set the complete if deposited", async function () {
    await tokenContract
      .connect(other)
      .transfer(contract.address, totalAllocation);

    await contract.setComplete(recipient.address, 0);
    expect(await contract.isCompleted(recipient.address, 0)).to.be.equal(true);
  });
});

describe("Milestone Based Contract creation with multiple recipients", async function () {
  let tokenContract: TestERC20Token;

  let contract: VestingMilestone;

  before(async () => {
    tokenContract = await deployTestToken();
  });

  it("should create milestones for 50 recipients", async function () {
    const recipients = [];
    for (let i = 0; i < 50; i++) {
      recipients.push(await randomAddress());
    }
    contract = await createVestingMilestone(tokenContract, recipients);

    const milestoneRecipients = await contract.getAllRecipients();
    expect(milestoneRecipients.length).to.be.equal(recipients.length);
    expect(milestoneRecipients[33]).to.be.equal(recipients[33]);

    const milestone = await contract.getMilestone(recipients[0], 1);
    expect(milestone.releaseIntervalSecs).to.be.equal(
      milestones[1].releaseIntervalSecs
    );
    expect(milestone.period).to.be.equal(milestones[1].period);
  });
});
