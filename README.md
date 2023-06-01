# VTVL Hardhat project

This folder contains the vesting (and other auxiliary) smart contracts used for *vtvl* vesting project. It is set up within a Hardhat environment, so the usual hardhat tools are available.

# Contracts

## FullPremintERC20Token 
A very basic, standard ERC20 token. Used as a helper for development. VTVLVesting contract supports any ERC20 token, so any other token can be substituted for this one.

## VariableSupplyERC20Token 
A very basic, standard ERC20 token with the ability to premint some or all of the tokens. Furthermore, it allows the user to specify a variable supply later on, if required.

## VTVLVesting
This is the main contract of the project. It controls the vesting of a given token, based on an arbitrary schedule.

When the contract is created (in the constructor), it receives the address for the relevant ERC20 token. This address cannot be changed later, i.e. a given contract can only control one token.

A vesting contract is associated to a token given at creation. It only carries out operations with respect to that token.

#### Claim
A claim is a vesting right associated to a given address. Each address can have a maximum of one claim associated to it.

A claim consists of the cliff part and the linear vesting part. 

The cliff gets released all at once at a specified moment (cliffReleaseTimestamp). 

Linear vesting, on the other hand, starts at startTimestamp and ends at some later date (endTimestamp). During this period, the user's allocation gradually increases as the time passes. The allocated amount can be configured to be claimable continuously (every second), or less frequently (for example, every hour, every day, etc).

Each of the parts (cliff and linear) have amounts that can be allocated to each. The founders can opt to use either or both options for each of the claims.

#### Access to the contract functions
There are three main groups that may want to interact with the contract - the administrators, vesting recipients, and everyone else.

##### The administrators
The administrators are normally the founders. They can create and revoke claims at will - however (other than revoking it), they cannot modify an existing claim. They can also withdraw the remaining amount not allocated on claims back to their wallet.

This group initially starts with just having the contract deployer as the owner/admin. They can then add (or remove) other users as administrators, relegating them the same rights.

##### Vesting recipients
If an user has a valid claim associated to their address, they have the ability to withdraw the amount that's claimable at the moment they make the claim. No one other than the designated vesting recipient (not even the admin) can withdraw on an existing claim - but the admin can revoke the claim.

##### Everyone else
Everyone else has just read access to the contract. That includes the ability to read all the vesting recipients, all claim information, as well as the information about how much will a given user vest at a certain point in time.



# Development setup and tasks

## Compiling the contracts
The contracts can be compiled by running:

```shell
npx hardhat compile
```
This creates the appropriate artifacts.

## Running a local node
```shell
npx hardhat node
```
Spins up a local node, similar to ganache. The private keys will be shown in the command line.

## Running a Moralis proxy
```shell
npm run moralis-proxy
```
In addition to running a local node, a developer might want to spin up a moralis proxy which would mimic the Moralis functionalities on a local network. This script relies on the information specified in *.env* file. The values you should use can be found in your Moralis dashboard. An example file would be similar to:
```
frpcPath=/path/to/frp/frpc
moralisApiKey=YOUR_MORALIS_API_KEY
moralisApiSecret=YOUR_MORALIS_API_SECRET
moralisSubdomain=YOUR_MORALIS_SUBDOMAIN
chain=hardhat
```

## Running tests
```shell
npx hardhat test
```
Runs the tests.

## Collecting test coverage
```shell
npx hardhat coverage
```
Collect the test coverage information.

## Running a (deploy) script
```shell
npx hardhat run --network localhost scripts/deploy.js
```
Runs an arbitrary script. This example assumes script *deploy.js* from the *scripts* dir, but an arbitrary script can be chosen. *--network* option gives us the possibility to select the network on which the script is executed. Options include all networks defined within *hardhat.config.js* file, so it can be configured to use Ethereum testnets or even mainnet.
