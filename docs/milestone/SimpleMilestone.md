# SimpleMilestone









## Methods

### allocation

```solidity
function allocation() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### claimableAmount

```solidity
function claimableAmount(address _recipient, uint256 _milestoneIndex) external view returns (uint256)
```

Calculates how much recipient can claim.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | undefined |
| _milestoneIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### deposit

```solidity
function deposit(uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |

### getAllRecipients

```solidity
function getAllRecipients() external view returns (address[])
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

### getMilestone

```solidity
function getMilestone(address _recipient, uint256 _milestoneIndex) external view returns (struct Milestone)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | undefined |
| _milestoneIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Milestone | undefined |

### isCompleted

```solidity
function isCompleted(address _recipient, uint256 _milestoneIndex) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | undefined |
| _milestoneIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### numTokensReservedForVesting

```solidity
function numTokensReservedForVesting() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### recipients

```solidity
function recipients(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setComplete

```solidity
function setComplete(address _recipient, uint256 _milestoneIndex) external nonpayable
```

Only can mark as completed when it&#39;s deposited fully.

*Only onwer can mark as completed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | undefined |
| _milestoneIndex | uint256 | undefined |

### tokenAddress

```solidity
function tokenAddress() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### withdraw

```solidity
function withdraw(uint256 _milestoneIndex) external nonpayable
```

Only recipient can claim when it&#39;s completed.

*Withdraw all tokens.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _milestoneIndex | uint256 | undefined |

### withdrawAdmin

```solidity
function withdrawAdmin() external nonpayable
```

Only admin can withdraw the amount before it&#39;s completed.






## Events

### AdminWithdrawn

```solidity
event AdminWithdrawn(address indexed _recipient, uint256 _amountRequested)
```

Emitted when admin withdraws.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _amountRequested  | uint256 | undefined |

### Claimed

```solidity
event Claimed(address indexed _recipient, uint256 _withdrawalAmount)
```

Emitted when someone withdraws a vested amount



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _withdrawalAmount  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |


