# VTVLVesting









## Methods

### amountAvailableToWithdrawByAdmin

```solidity
function amountAvailableToWithdrawByAdmin() external view returns (uint256)
```

Get amount that is not vested in contract

*Whenever vesting is revoked, this amount will be increased.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address to, uint256 tokenId) external payable
```



*Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| tokenId | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*Returns the number of tokens in `owner`&#39;s account.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### claimableAmount

```solidity
function claimableAmount(uint256 _fractionalId) external view returns (uint256)
```

Calculates how much can we claim, by subtracting the already withdrawn amount from the vestedAmount at this moment.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _fractionalId | uint256 | - The fractional NFT Id for whom we&#39;re calculating |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### cliffAmount

```solidity
function cliffAmount() external view returns (uint112)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint112 | undefined |

### cliffReleaseTimestamp

```solidity
function cliffReleaseTimestamp() external view returns (uint40)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint40 | undefined |

### createClaim

```solidity
function createClaim(address _recipient, uint40 _startTimestamp, uint40 _endTimestamp, uint40 _cliffReleaseTimestamp, uint40 _releaseIntervalSecs, uint112 _linearVestAmount, uint112 _cliffAmount, uint40 _fractionalAmount) external nonpayable
```

Create a claim based on the input parameters.

*This&#39;ll simply check the input parameters, and create the structure verbatim based on passed in parameters.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient | address | - The address of the recipient of the schedule |
| _startTimestamp | uint40 | - The timestamp when the linear vesting starts |
| _endTimestamp | uint40 | - The timestamp when the linear vesting ends |
| _cliffReleaseTimestamp | uint40 | - The timestamp when the cliff is released (must be &lt;= _startTimestamp, or 0 if no vesting) |
| _releaseIntervalSecs | uint40 | - The release interval for the linear vesting. If this is, for example, 60, that means that the linearly vested amount gets released every 60 seconds. |
| _linearVestAmount | uint112 | - The total amount to be linearly vested between _startTimestamp and _endTimestamp |
| _cliffAmount | uint112 | - The amount released at _cliffReleaseTimestamp. Can be 0 if _cliffReleaseTimestamp is also 0. |
| _fractionalAmount | uint40 | - The amount of fractionals |

### endTimestamp

```solidity
function endTimestamp() external view returns (uint40)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint40 | undefined |

### finalVestedAmount

```solidity
function finalVestedAmount(uint256 _fractionalId) external view returns (uint256)
```

Calculate the total vested at the end of the schedule, by simply feeding in the end timestamp to the function above.

*This fn is somewhat superfluous, should probably be removed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fractionalId | uint256 | - The factional NFT id for whom we&#39;re calculating |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### fractionalAmount

```solidity
function fractionalAmount() external view returns (uint40)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint40 | undefined |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getClaim

```solidity
function getClaim() external view returns (uint40, uint40, uint40, uint40, uint256, uint112, uint40)
```

Basic getter for a claim.

*Could be using public claims var, but this is cleaner in terms of naming. (getClaim(address) as opposed to claims(address)).*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint40 | undefined |
| _1 | uint40 | undefined |
| _2 | uint40 | undefined |
| _3 | uint40 | undefined |
| _4 | uint256 | undefined |
| _5 | uint112 | undefined |
| _6 | uint40 | undefined |

### getWithdrawnAmount

```solidity
function getWithdrawnAmount(uint256 _fractionalId) external view returns (uint256)
```

Get the withdrawn amount for each nfts. 



#### Parameters

| Name | Type | Description |
|---|---|---|
| _fractionalId | uint256 | - the Id of NFT that you are going to get the withdrawn amount |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### isActive

```solidity
function isActive(uint256 _fractionalId) external view returns (bool)
```

Return active status of Fraction NFT



#### Parameters

| Name | Type | Description |
|---|---|---|
| _fractionalId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isAdmin

```solidity
function isAdmin(address _addressToCheck) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _addressToCheck | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```



*Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### linearVestAmount

```solidity
function linearVestAmount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### name

```solidity
function name() external view returns (string)
```



*Returns the token collection name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### numFractionals

```solidity
function numFractionals() external view returns (uint40)
```

Get the total number of fractional NFTs.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint40 | undefined |

### numTokensReservedForVesting

```solidity
function numTokensReservedForVesting() external view returns (uint256)
```

How many tokens are already allocated to vesting schedules.

*Our balance of the token must always be greater than this amount. Otherwise we risk some users not getting their shares. This gets reduced as the users are paid out or when their schedules are revoked (as it is not reserved any more). In other words, this represents the amount the contract is scheduled to pay out at some point if the  owner were to never interact with the contract.*


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

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```



*Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### releaseIntervalSecs

```solidity
function releaseIntervalSecs() external view returns (uint40)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint40 | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### revokeClaim

```solidity
function revokeClaim(uint256 _fractionalId) external nonpayable
```

Allow an Owner to revoke a claim that is already active.

*The requirement is that a claim exists and that it&#39;s active.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fractionalId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external payable
```



*Equivalent to `safeTransferFrom(from, to, tokenId, &#39;&#39;)`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) external payable
```



*Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |
| _data | bytes | undefined |

### setAdmin

```solidity
function setAdmin(address admin, bool isEnabled) external nonpayable
```

Set/unset Admin Access for a given address.



#### Parameters

| Name | Type | Description |
|---|---|---|
| admin | address | - Address of the new admin (or the one to be removed) |
| isEnabled | bool | - Enable/Disable Admin Access |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### setBaseURI

```solidity
function setBaseURI(string baseURI_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| baseURI_ | string | undefined |

### startTimestamp

```solidity
function startTimestamp() external view returns (uint40)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint40 | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding [EIP section](https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified) to learn more about how these ids are created. This function call must use less than 30000 gas.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the token collection symbol.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenAddress

```solidity
function tokenAddress() external view returns (contract IERC20)
```

Address of the token that we&#39;re vesting




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```



*Returns the Uniform Resource Identifier (URI) for `tokenId` token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*Returns the total number of tokens in existence. Burned tokens will reduce the count. To get the total number of tokens minted, please see {_totalMinted}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external payable
```



*Transfers `tokenId` from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### vestedAmount

```solidity
function vestedAmount(uint256 _fractionalId, uint40 _referenceTs) external view returns (uint256)
```

Calculate the amount vested for a given _recipient at a reference timestamp.

*Simply call the _baseVestedAmount for the claim in question*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fractionalId | uint256 | - The ID of fractional NFT. |
| _referenceTs | uint40 | - The timestamp at which we want to calculate the vested amount. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdraw

```solidity
function withdraw(uint256 _fractionalId) external nonpayable
```

Withdraw the full claimable balance.

*hasActiveClaim throws off anyone without a claim.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fractionalId | uint256 | - The fraction NFT Id that is going to withdraw with. |

### withdrawAdmin

```solidity
function withdrawAdmin(uint256 _amountRequested) external nonpayable
```

Admin withdrawal of the unallocated tokens.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _amountRequested | uint256 | - the amount that we want to withdraw |

### withdrawOtherToken

```solidity
function withdrawOtherToken(contract IERC20 _otherTokenAddress) external nonpayable
```

Withdraw a token which isn&#39;t controlled by the vesting contract.

*This contract controls/vests token at &quot;tokenAddress&quot;. However, someone might send a different token.  To make sure these don&#39;t get accidentally trapped, give admin the ability to withdraw them (to their own address). Note that the token to be withdrawn can&#39;t be the one at &quot;tokenAddress&quot;.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _otherTokenAddress | contract IERC20 | - the token which we want to withdraw |



## Events

### AdminAccessSet

```solidity
event AdminAccessSet(address indexed _admin, bool _enabled)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _admin `indexed` | address | undefined |
| _enabled  | bool | undefined |

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

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### ClaimCreated

```solidity
event ClaimCreated(address indexed _owner, uint40 _fractionalAmount, uint40 _startTimestamp, uint40 _endTimestamp, uint40 _cliffReleaseTimestamp, uint40 _releaseIntervalSecs, uint112 _cliffAmount, uint256 _linearVestAmount)
```

Emitted when a founder adds a vesting schedule.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _fractionalAmount  | uint40 | undefined |
| _startTimestamp  | uint40 | undefined |
| _endTimestamp  | uint40 | undefined |
| _cliffReleaseTimestamp  | uint40 | undefined |
| _releaseIntervalSecs  | uint40 | undefined |
| _cliffAmount  | uint112 | undefined |
| _linearVestAmount  | uint256 | undefined |

### ClaimRevoked

```solidity
event ClaimRevoked(uint256 indexed _fractionalId, uint256 _numTokensWithheld, uint256 revocationTimestamp)
```

Emitted when a claim is revoked



#### Parameters

| Name | Type | Description |
|---|---|---|
| _fractionalId `indexed` | uint256 | undefined |
| _numTokensWithheld  | uint256 | undefined |
| revocationTimestamp  | uint256 | undefined |

### Claimed

```solidity
event Claimed(address indexed _recipient, uint256 _fractionalId, uint256 _withdrawalAmount)
```

Emitted when someone withdraws a vested amount



#### Parameters

| Name | Type | Description |
|---|---|---|
| _recipient `indexed` | address | undefined |
| _fractionalId  | uint256 | undefined |
| _withdrawalAmount  | uint256 | undefined |

### ConsecutiveTransfer

```solidity
event ConsecutiveTransfer(uint256 indexed fromTokenId, uint256 toTokenId, address indexed from, address indexed to)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| fromTokenId `indexed` | uint256 | undefined |
| toTokenId  | uint256 | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |



## Errors

### ApprovalCallerNotOwnerNorApproved

```solidity
error ApprovalCallerNotOwnerNorApproved()
```

The caller must own the token or be an approved operator.




### ApprovalQueryForNonexistentToken

```solidity
error ApprovalQueryForNonexistentToken()
```

The token does not exist.




### BalanceQueryForZeroAddress

```solidity
error BalanceQueryForZeroAddress()
```

Cannot query the balance for the zero address.




### MintERC2309QuantityExceedsLimit

```solidity
error MintERC2309QuantityExceedsLimit()
```

The `quantity` minted with ERC2309 exceeds the safety limit.




### MintToZeroAddress

```solidity
error MintToZeroAddress()
```

Cannot mint to the zero address.




### MintZeroQuantity

```solidity
error MintZeroQuantity()
```

The quantity of tokens minted must be more than zero.




### OwnerQueryForNonexistentToken

```solidity
error OwnerQueryForNonexistentToken()
```

The token does not exist.




### OwnershipNotInitializedForExtraData

```solidity
error OwnershipNotInitializedForExtraData()
```

The `extraData` cannot be set on an unintialized ownership slot.




### TransferCallerNotOwnerNorApproved

```solidity
error TransferCallerNotOwnerNorApproved()
```

The caller must own the token or be an approved operator.




### TransferFromIncorrectOwner

```solidity
error TransferFromIncorrectOwner()
```

The token must be owned by `from`.




### TransferToNonERC721ReceiverImplementer

```solidity
error TransferToNonERC721ReceiverImplementer()
```

Cannot safely transfer to a contract that does not implement the ERC721Receiver interface.




### TransferToZeroAddress

```solidity
error TransferToZeroAddress()
```

Cannot transfer to the zero address.




### URIQueryForNonexistentToken

```solidity
error URIQueryForNonexistentToken()
```

The token does not exist.





