# VTVLVestingFactory



> Vesting Factory contract

Create Vesting contract



## Methods

### createVestingContract

```solidity
function createVestingContract(contract IERC20 _tokenAddress, uint256 _feePercent) external nonpayable
```

Create Vesting contract without funding.

*This will only create the vesting contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenAddress | contract IERC20 | Vesting Fund token address. |
| _feePercent | uint256 | The percent of fee. |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setFee

```solidity
function setFee(address _vestingContract, uint256 _feePercent) external nonpayable
```

Set the fee percent of Vesting contract.

*100% will be 10000.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _vestingContract | address | undefined |
| _feePercent | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### updateFeeReceiver

```solidity
function updateFeeReceiver(address _vestingContract, address _newReceiver) external nonpayable
```

Set the fee recipient of Vesting contract.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _vestingContract | address | undefined |
| _newReceiver | address | undefined |

### withdraw

```solidity
function withdraw(address _tokenAddress, address _receiver) external nonpayable
```

Withdraw the token to the receiver.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenAddress | address | undefined |
| _receiver | address | undefined |



## Events

### CreateVestingContract

```solidity
event CreateVestingContract(address indexed vestingAddress, address deployer)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| vestingAddress `indexed` | address | undefined |
| deployer  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



