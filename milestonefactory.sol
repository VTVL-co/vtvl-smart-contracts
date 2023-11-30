// Sources flattened with hardhat v2.17.0 https://hardhat.org

// File @openzeppelin/contracts/utils/Context.sol@v4.9.3

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

// File @openzeppelin/contracts/access/Ownable.sol@v4.9.3

// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby disabling any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(
            newOwner != address(0),
            "Ownable: new owner is the zero address"
        );
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.9.3

// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

// File @openzeppelin/contracts/interfaces/IERC20.sol@v4.9.3

// OpenZeppelin Contracts v4.4.1 (interfaces/IERC20.sol)

pragma solidity ^0.8.0;

// File @openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol@v4.9.3

// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/extensions/IERC20Permit.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in
 * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].
 *
 * Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by
 * presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't
 * need to send a transaction, and thus is not required to hold Ether at all.
 */
interface IERC20Permit {
    /**
     * @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,
     * given ``owner``'s signed approval.
     *
     * IMPORTANT: The same issues {IERC20-approve} has related to transaction
     * ordering also apply here.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `deadline` must be a timestamp in the future.
     * - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`
     * over the EIP712-formatted function arguments.
     * - the signature must use ``owner``'s current nonce (see {nonces}).
     *
     * For more information on the signature format, see the
     * https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP
     * section].
     */
    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    /**
     * @dev Returns the current nonce for `owner`. This value must be
     * included whenever a signature is generated for {permit}.
     *
     * Every successful call to {permit} increases ``owner``'s nonce by one. This
     * prevents a signature from being used multiple times.
     */
    function nonces(address owner) external view returns (uint256);

    /**
     * @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.
     */
    // solhint-disable-next-line func-name-mixedcase
    function DOMAIN_SEPARATOR() external view returns (bytes32);
}

// File @openzeppelin/contracts/utils/Address.sol@v4.9.3

// OpenZeppelin Contracts (last updated v4.9.0) (utils/Address.sol)

pragma solidity ^0.8.1;

/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     *
     * Furthermore, `isContract` will also return true if the target contract within
     * the same transaction is already scheduled for destruction by `SELFDESTRUCT`,
     * which only has an effect at the end of a transaction.
     * ====
     *
     * [IMPORTANT]
     * ====
     * You shouldn't rely on `isContract` to protect against flash loan attacks!
     *
     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets
     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract
     * constructor.
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize/address.code.length, which returns 0
        // for contracts in construction, since the code is only stored at the end
        // of the constructor execution.

        return account.code.length > 0;
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(
            address(this).balance >= amount,
            "Address: insufficient balance"
        );

        (bool success, ) = recipient.call{value: amount}("");
        require(
            success,
            "Address: unable to send value, recipient may have reverted"
        );
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain `call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(
        address target,
        bytes memory data
    ) internal returns (bytes memory) {
        return
            functionCallWithValue(
                target,
                data,
                0,
                "Address: low-level call failed"
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value
    ) internal returns (bytes memory) {
        return
            functionCallWithValue(
                target,
                data,
                value,
                "Address: low-level call with value failed"
            );
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(
            address(this).balance >= value,
            "Address: insufficient balance for call"
        );
        (bool success, bytes memory returndata) = target.call{value: value}(
            data
        );
        return
            verifyCallResultFromTarget(
                target,
                success,
                returndata,
                errorMessage
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(
        address target,
        bytes memory data
    ) internal view returns (bytes memory) {
        return
            functionStaticCall(
                target,
                data,
                "Address: low-level static call failed"
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal view returns (bytes memory) {
        (bool success, bytes memory returndata) = target.staticcall(data);
        return
            verifyCallResultFromTarget(
                target,
                success,
                returndata,
                errorMessage
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(
        address target,
        bytes memory data
    ) internal returns (bytes memory) {
        return
            functionDelegateCall(
                target,
                data,
                "Address: low-level delegate call failed"
            );
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        (bool success, bytes memory returndata) = target.delegatecall(data);
        return
            verifyCallResultFromTarget(
                target,
                success,
                returndata,
                errorMessage
            );
    }

    /**
     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling
     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.
     *
     * _Available since v4.8._
     */
    function verifyCallResultFromTarget(
        address target,
        bool success,
        bytes memory returndata,
        string memory errorMessage
    ) internal view returns (bytes memory) {
        if (success) {
            if (returndata.length == 0) {
                // only check isContract if the call was successful and the return data is empty
                // otherwise we already know that it was a contract
                require(isContract(target), "Address: call to non-contract");
            }
            return returndata;
        } else {
            _revert(returndata, errorMessage);
        }
    }

    /**
     * @dev Tool to verify that a low level call was successful, and revert if it wasn't, either by bubbling the
     * revert reason or using the provided one.
     *
     * _Available since v4.3._
     */
    function verifyCallResult(
        bool success,
        bytes memory returndata,
        string memory errorMessage
    ) internal pure returns (bytes memory) {
        if (success) {
            return returndata;
        } else {
            _revert(returndata, errorMessage);
        }
    }

    function _revert(
        bytes memory returndata,
        string memory errorMessage
    ) private pure {
        // Look for revert reason and bubble it up if present
        if (returndata.length > 0) {
            // The easiest way to bubble the revert reason is using memory via assembly
            /// @solidity memory-safe-assembly
            assembly {
                let returndata_size := mload(returndata)
                revert(add(32, returndata), returndata_size)
            }
        } else {
            revert(errorMessage);
        }
    }
}

// File @openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol@v4.9.3

// OpenZeppelin Contracts (last updated v4.9.3) (token/ERC20/utils/SafeERC20.sol)

pragma solidity ^0.8.0;

/**
 * @title SafeERC20
 * @dev Wrappers around ERC20 operations that throw on failure (when the token
 * contract returns false). Tokens that return no value (and instead revert or
 * throw on failure) are also supported, non-reverting calls are assumed to be
 * successful.
 * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,
 * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.
 */
library SafeERC20 {
    using Address for address;

    /**
     * @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,
     * non-reverting calls are assumed to be successful.
     */
    function safeTransfer(IERC20 token, address to, uint256 value) internal {
        _callOptionalReturn(
            token,
            abi.encodeWithSelector(token.transfer.selector, to, value)
        );
    }

    /**
     * @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the
     * calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.
     */
    function safeTransferFrom(
        IERC20 token,
        address from,
        address to,
        uint256 value
    ) internal {
        _callOptionalReturn(
            token,
            abi.encodeWithSelector(token.transferFrom.selector, from, to, value)
        );
    }

    /**
     * @dev Deprecated. This function has issues similar to the ones found in
     * {IERC20-approve}, and its usage is discouraged.
     *
     * Whenever possible, use {safeIncreaseAllowance} and
     * {safeDecreaseAllowance} instead.
     */
    function safeApprove(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        // safeApprove should only be called when setting an initial allowance,
        // or when resetting it to zero. To increase and decrease it, use
        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'
        require(
            (value == 0) || (token.allowance(address(this), spender) == 0),
            "SafeERC20: approve from non-zero to non-zero allowance"
        );
        _callOptionalReturn(
            token,
            abi.encodeWithSelector(token.approve.selector, spender, value)
        );
    }

    /**
     * @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,
     * non-reverting calls are assumed to be successful.
     */
    function safeIncreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        uint256 oldAllowance = token.allowance(address(this), spender);
        _callOptionalReturn(
            token,
            abi.encodeWithSelector(
                token.approve.selector,
                spender,
                oldAllowance + value
            )
        );
    }

    /**
     * @dev Decrease the calling contract's allowance toward `spender` by `value`. If `token` returns no value,
     * non-reverting calls are assumed to be successful.
     */
    function safeDecreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        unchecked {
            uint256 oldAllowance = token.allowance(address(this), spender);
            require(
                oldAllowance >= value,
                "SafeERC20: decreased allowance below zero"
            );
            _callOptionalReturn(
                token,
                abi.encodeWithSelector(
                    token.approve.selector,
                    spender,
                    oldAllowance - value
                )
            );
        }
    }

    /**
     * @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,
     * non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval
     * to be set to zero before setting it to a non-zero value, such as USDT.
     */
    function forceApprove(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        bytes memory approvalCall = abi.encodeWithSelector(
            token.approve.selector,
            spender,
            value
        );

        if (!_callOptionalReturnBool(token, approvalCall)) {
            _callOptionalReturn(
                token,
                abi.encodeWithSelector(token.approve.selector, spender, 0)
            );
            _callOptionalReturn(token, approvalCall);
        }
    }

    /**
     * @dev Use a ERC-2612 signature to set the `owner` approval toward `spender` on `token`.
     * Revert on invalid signature.
     */
    function safePermit(
        IERC20Permit token,
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) internal {
        uint256 nonceBefore = token.nonces(owner);
        token.permit(owner, spender, value, deadline, v, r, s);
        uint256 nonceAfter = token.nonces(owner);
        require(
            nonceAfter == nonceBefore + 1,
            "SafeERC20: permit did not succeed"
        );
    }

    /**
     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
     * on the return value: the return value is optional (but if data is returned, it must not be false).
     * @param token The token targeted by the call.
     * @param data The call data (encoded using abi.encode or one of its variants).
     */
    function _callOptionalReturn(IERC20 token, bytes memory data) private {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We use {Address-functionCall} to perform this call, which verifies that
        // the target address contains contract code and also asserts for success in the low-level call.

        bytes memory returndata = address(token).functionCall(
            data,
            "SafeERC20: low-level call failed"
        );
        require(
            returndata.length == 0 || abi.decode(returndata, (bool)),
            "SafeERC20: ERC20 operation did not succeed"
        );
    }

    /**
     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
     * on the return value: the return value is optional (but if data is returned, it must not be false).
     * @param token The token targeted by the call.
     * @param data The call data (encoded using abi.encode or one of its variants).
     *
     * This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.
     */
    function _callOptionalReturnBool(
        IERC20 token,
        bytes memory data
    ) private returns (bool) {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We cannot use {Address-functionCall} here since this should return false
        // and not revert is the subcall reverts.

        (bool success, bytes memory returndata) = address(token).call(data);
        return
            success &&
            (returndata.length == 0 || abi.decode(returndata, (bool))) &&
            Address.isContract(address(token));
    }
}

// File contracts/AccessProtected.sol

pragma solidity 0.8.14;

/** 
@title Access Limiter to multiple owner-specified accounts.
@dev Exposes the onlyAdmin modifier, which will revert (ADMIN_ACCESS_REQUIRED) if the caller is not the owner nor the admin.
*/
abstract contract AccessProtected is Context {
    mapping(address => bool) private _admins; // user address => admin? mapping

    event AdminAccessSet(address indexed _admin, bool _enabled);

    constructor(address _owner) {
        _admins[_owner] = true;
        emit AdminAccessSet(_owner, true);
    }

    /**
     * Throws if called by any account that isn't an admin or an owner.
     */
    modifier onlyAdmin() {
        require(_admins[_msgSender()], "ADMIN_ACCESS_REQUIRED");
        _;
    }

    function isAdmin(address _addressToCheck) external view returns (bool) {
        return _admins[_addressToCheck];
    }

    /**
     * @notice Set/unset Admin Access for a given address.
     *
     * @param admin - Address of the new admin (or the one to be removed)
     * @param isEnabled - Enable/Disable Admin Access
     */
    function setAdmin(address admin, bool isEnabled) public onlyAdmin {
        require(admin != address(0), "INVALID_ADDRESS");
        _admins[admin] = isEnabled;
        emit AdminAccessSet(admin, isEnabled);
    }
}

// File @openzeppelin/contracts/security/ReentrancyGuard.sol@v4.9.3

// OpenZeppelin Contracts (last updated v4.9.0) (security/ReentrancyGuard.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        _nonReentrantBefore();
        _;
        _nonReentrantAfter();
    }

    function _nonReentrantBefore() private {
        // On the first call to nonReentrant, _status will be _NOT_ENTERED
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;
    }

    function _nonReentrantAfter() private {
        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Returns true if the reentrancy guard is currently set to "entered", which indicates there is a
     * `nonReentrant` function in the call stack.
     */
    function _reentrancyGuardEntered() internal view returns (bool) {
        return _status == _ENTERED;
    }
}

// File contracts/milestone/BaseMilestone.sol

pragma solidity ^0.8.14;

struct Milestone {
    uint256 startTime;
    uint256 withdrawnAmount;
    uint128 period;
    uint120 releaseIntervalSecs;
    bool isWithdrawn; // This is for simple milestone contract.
    uint248 allocation;
    uint8 percent;
}

struct InputMilestone {
    uint8 percent;
    uint128 period;
    uint120 releaseIntervalSecs;
}

contract BaseMilestone is AccessProtected, ReentrancyGuard {
    using SafeERC20 for IERC20;

    /**
    @notice Emitted when someone withdraws a vested amount
    */
    event Claimed(address indexed _recipient, uint256 _withdrawalAmount);

    address[] public recipients;
    IERC20 public tokenAddress;
    uint256 public allocation;
    uint256 public numTokensReservedForVesting;
    uint256 public totalWithdrawnAmount;

    mapping(address => mapping(uint256 => Milestone)) milestones;

    /** 
    @notice Emitted when admin withdraws.
    */
    event AdminWithdrawn(address indexed _recipient, uint256 _amountRequested);

    constructor(address _owner) AccessProtected(_owner) {}

    function initializeMilestones(
        InputMilestone[] memory _milestones
    ) internal {
        uint256 length = _milestones.length;

        for (uint256 i = 0; i < length; ) {
            Milestone memory milestone;

            milestone.period = _milestones[i].period;
            milestone.releaseIntervalSecs = _milestones[i].releaseIntervalSecs;
            milestone.allocation = uint248(
                (_milestones[i].percent * allocation) / 100
            );

            uint256 recipientLenth = recipients.length;

            for (uint256 j = 0; j < recipientLenth; ) {
                milestones[recipients[j]][i] = milestone;
                unchecked {
                    ++j;
                }
            }

            unchecked {
                ++i;
            }
        }
    }

    function initializeAllocations(
        uint256[] memory _allocationPercents
    ) internal {
        uint256 length = _allocationPercents.length;
        for (uint256 i = 0; i < length; ) {
            uint256 recipientLenth = recipients.length;
            uint248 amount = uint248(
                (_allocationPercents[i] * allocation) / 100
            );
            for (uint256 j = 0; j < recipientLenth; ) {
                unchecked {
                    milestones[recipients[j]][i].allocation = amount;
                    ++j;
                }
            }

            unchecked {
                ++i;
            }
        }
    }

    modifier hasMilestone(address _recipient, uint256 _milestoneIndex) {
        require(
            milestones[_recipient][_milestoneIndex].allocation != 0,
            "NO_MILESTONE"
        );

        _;
    }

    modifier onlyCompleted(address _recipient, uint256 _milestoneIndex) {
        require(
            milestones[_recipient][_milestoneIndex].startTime != 0,
            "NOT_COMPLETED"
        );

        _;
    }

    modifier onlyDeposited() {
        uint256 balance = tokenAddress.balanceOf(address(this));
        require(
            balance + totalWithdrawnAmount >= allocation * recipients.length,
            "NOT_DEPOSITED"
        );

        _;
    }

    function isCompleted(
        address _recipient,
        uint256 _milestoneIndex
    ) public view returns (bool) {
        return
            milestones[_recipient][_milestoneIndex].startTime == 0
                ? false
                : true;
    }

    /**
    @notice Only can mark as completed when it's deposited fully.
    @dev Only onwer can mark as completed.
     */
    function setComplete(
        address _recipient,
        uint256 _milestoneIndex
    ) public onlyAdmin onlyDeposited {
        Milestone storage milestone = milestones[_recipient][_milestoneIndex];

        require(milestone.startTime == 0, "ALREADY_COMPLETED");

        milestone.startTime = block.timestamp;
        numTokensReservedForVesting += milestone.allocation;
    }

    /**
    @notice Only admin can withdraw the amount before it's completed.
     */
    function withdrawAdmin() public onlyAdmin nonReentrant {
        uint256 availableAmount = tokenAddress.balanceOf(address(this)) -
            (numTokensReservedForVesting - totalWithdrawnAmount);

        tokenAddress.safeTransfer(msg.sender, availableAmount);

        emit AdminWithdrawn(_msgSender(), availableAmount);
    }

    function deposit(uint256 amount) public nonReentrant {
        tokenAddress.safeTransferFrom(msg.sender, address(this), amount);
    }

    function getAllRecipients() public view returns (address[] memory) {
        return recipients;
    }

    function getMilestone(
        address _recipient,
        uint256 _milestoneIndex
    ) public view returns (Milestone memory) {
        return milestones[_recipient][_milestoneIndex];
    }
}

// File contracts/milestone/SimpleMilestone.sol

pragma solidity ^0.8.14;

contract SimpleMilestone is BaseMilestone {
    using SafeERC20 for IERC20;

    /**
    @notice Construct the contract.
    @param _tokenAddress - the address of the claim token.
    @param _allocation - the allocation amount for this milestone.
    @param _allcationPercents - the allocation percents
    @param _recipients - the addresses for which we fetch the claim.
    @dev Factory contract will deposit the token when creating this contract.
    // This is created by Factory contract and Safe wallet can be used, 
    // so factory contract should pass address which will be the owner of this contract.
     */
    constructor(
        IERC20 _tokenAddress,
        uint256 _allocation,
        uint256[] memory _allcationPercents,
        address[] memory _recipients,
        address _owner
    ) BaseMilestone(_owner) {
        recipients = _recipients;
        tokenAddress = _tokenAddress;
        allocation = _allocation;

        super.initializeAllocations(_allcationPercents);
    }

    /**
    @notice Calculates how much recipient can claim.
    */
    function claimableAmount(
        address _recipient,
        uint256 _milestoneIndex
    ) public view returns (uint256) {
        Milestone memory milestone = milestones[_recipient][_milestoneIndex];
        if (milestone.startTime == 0 || milestone.isWithdrawn) {
            return 0;
        } else {
            return milestone.allocation;
        }
    }

    /**
    @notice Only recipient can claim when it's completed.
    @dev Withdraw all tokens.
     */
    function withdraw(
        uint256 _milestoneIndex
    )
        public
        hasMilestone(_msgSender(), _milestoneIndex)
        onlyCompleted(_msgSender(), _milestoneIndex)
        nonReentrant
    {
        Milestone storage milestone = milestones[_msgSender()][_milestoneIndex];
        require(!milestone.isWithdrawn, "ALREADY_WITHDRAWED");

        milestone.isWithdrawn = true;
        totalWithdrawnAmount += milestone.allocation;
        tokenAddress.safeTransfer(_msgSender(), milestone.allocation);

        // Let withdrawal known to everyone.
        emit Claimed(_msgSender(), milestone.allocation);
    }
}

// File contracts/milestone/VestingMilestone.sol

pragma solidity 0.8.14;

contract VestingMilestone is BaseMilestone {
    using SafeERC20 for IERC20;

    //
    /**
    @notice Construct the contract, taking the ERC20 token to be vested as the parameter.

     */
    constructor(
        IERC20 _tokenAddress,
        uint256 _allocation,
        InputMilestone[] memory _milestones,
        address[] memory _recipients,
        address _owner
    ) BaseMilestone(_owner) {
        require(address(_tokenAddress) != address(0), "INVALID_ADDRESS");
        tokenAddress = _tokenAddress;
        recipients = _recipients;
        allocation = _allocation;

        super.initializeMilestones(_milestones);
    }

    /**
    @notice Calculate the amount vested for a given _recipient at a reference timestamp.
    @param _recipient - The recipient address
    @param _milestoneIndex - The index of Milestone
    @param _referenceTs - The timestamp at which we want to calculate the vested amount.
    */
    function vestedAmount(
        address _recipient,
        uint256 _milestoneIndex,
        uint256 _referenceTs
    ) public view hasMilestone(_recipient, _milestoneIndex) returns (uint256) {
        Milestone memory milestone = milestones[_recipient][_milestoneIndex];
        if (milestone.startTime == 0) {
            return 0;
        }

        // Check if this time is over vesting end time
        if (_referenceTs > milestone.startTime + milestone.period) {
            return milestone.allocation;
        }

        if (_referenceTs > milestone.startTime) {
            uint256 currentVestingDurationSecs = _referenceTs -
                milestone.startTime; // How long since the start

            uint256 intervals = currentVestingDurationSecs /
                milestone.releaseIntervalSecs;
            uint256 amountPerInterval = (milestone.releaseIntervalSecs *
                milestone.allocation) / milestone.period;

            return amountPerInterval * intervals;
        }

        return 0;
    }

    /**
    @notice Calculate the total vested at the end of the schedule, by simply feeding in the end timestamp to the function above.
    @dev This fn is somewhat superfluous, should probably be removed.
     */
    function finalVestedAmount(
        address _recipient,
        uint256 _milestoneIndex
    ) public view returns (uint256) {
        return milestones[_recipient][_milestoneIndex].allocation;
    }

    /**
    @notice Calculates how much can we claim, by subtracting the already withdrawn amount from the vestedAmount at this moment.
    @param _recipient the address of the recipient.
    @param _milestoneIndex the index of milestones.
    */
    function claimableAmount(
        address _recipient,
        uint256 _milestoneIndex
    ) public view returns (uint256) {
        return
            vestedAmount(_recipient, _milestoneIndex, block.timestamp) -
            milestones[_recipient][_milestoneIndex].withdrawnAmount;
    }

    /**
    @notice Withdraw the full claimable balance.
    @param _milestoneIndex the index of milestones.
    @dev hasActiveClaim throws off anyone without a claim.
     */
    function withdraw(
        uint256 _milestoneIndex
    )
        external
        hasMilestone(_msgSender(), _milestoneIndex)
        onlyCompleted(_msgSender(), _milestoneIndex)
        nonReentrant
    {
        Milestone storage milestone = milestones[_msgSender()][_milestoneIndex];
        // we can use block.timestamp directly here as reference TS, as the function itself will make sure to cap it to endTimestamp
        uint256 allowance = vestedAmount(
            _msgSender(),
            _milestoneIndex,
            block.timestamp
        );

        // Make sure we didn't already withdraw more that we're allowed.
        require(allowance > milestone.withdrawnAmount, "NOTHING_TO_WITHDRAW");

        // Calculate how much can we withdraw (equivalent to the above inequality)
        uint256 amountRemaining = allowance - milestone.withdrawnAmount;

        milestone.withdrawnAmount = allowance;
        totalWithdrawnAmount += amountRemaining;

        tokenAddress.safeTransfer(_msgSender(), amountRemaining);

        // Let withdrawal known to everyone.
        emit Claimed(_msgSender(), amountRemaining);
    }
}

// File contracts/VTVLMilestoneFactory.sol

pragma solidity 0.8.14;

/// @title Milestone Vesting Factory contract
/// @notice Create Milestone contracts

contract VTVLMilestoneFactory is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    event CreateMilestoneContract(
        address indexed milestoneAddress,
        address creator
    );

    /**
    Check if sum of allocation percents is 100%
     */
    function milestoneValidate(
        InputMilestone[] calldata _milestones
    ) private pure {
        uint256 sum;
        uint256 length = _milestones.length;

        require(length > 0, "INVALID_MILESTONE_LENGTH");

        for (uint256 i = 0; i < length; ) {
            unchecked {
                sum += _milestones[i].percent;
                ++i;
            }
        }

        if (sum != 100) {
            revert("INVALID_ALLOCATION_PERCENTS");
        }
    }

    /**
    Check if sum of allocation percents is 100%
     */
    function allocationValidate(
        uint256[] calldata _allocationPercents
    ) private pure {
        uint256 sum;
        uint256 length = _allocationPercents.length;

        require(length > 0, "INVALID_MILESTONE_LENGTH");

        for (uint256 i = 0; i < length; ) {
            unchecked {
                sum += _allocationPercents[i];
                ++i;
            }
        }

        if (sum != 100) {
            revert("INVALID_ALLOCATION_PERCENTS");
        }
    }

    function _deposit(
        IERC20 _tokenAddress,
        uint256 _amount,
        address _contractAddress
    ) private {
        uint256 userBalance = _tokenAddress.balanceOf(msg.sender);

        if (userBalance >= _amount) {
            _tokenAddress.safeTransferFrom(
                msg.sender,
                address(_contractAddress),
                _amount
            );
        }
    }

    /**
     * @notice Create milestone based Vesting contract.
     * @dev All recipients will have the same milestones.
     * @param _tokenAddress Vesting fund token address.
     * @param _allocation The total allocation amount for the milestones.
     * @param _recipients The addresses of the recipients.
     */
    function createVestingMilestone(
        IERC20 _tokenAddress,
        uint256 _allocation,
        InputMilestone[] calldata _milestones,
        address[] calldata _recipients
    ) public nonReentrant {
        require(_recipients.length > 0, "Invalid Recipients");
        milestoneValidate(_milestones);

        VestingMilestone milestoneContract = new VestingMilestone(
            _tokenAddress,
            _allocation,
            _milestones,
            _recipients,
            msg.sender
        );

        _deposit(
            _tokenAddress,
            _allocation * _recipients.length,
            address(milestoneContract)
        );

        emit CreateMilestoneContract(address(milestoneContract), msg.sender);
    }

    /**
     * @notice Create simple milestones.
     * @dev All recipients will have the same milestones.
     * @param _tokenAddress Vesting fund token address.
     * @param _allocation The total allocation amount for the milestones.
     * @param _recipients The addresses of the recipients.
     */
    function createSimpleMilestones(
        IERC20 _tokenAddress,
        uint256 _allocation,
        uint256[] calldata _allocationPercents,
        address[] calldata _recipients
    ) public nonReentrant {
        require(_recipients.length > 0, "Invalid Recipients");

        allocationValidate(_allocationPercents);

        SimpleMilestone milestoneContract = new SimpleMilestone(
            _tokenAddress,
            _allocation,
            _allocationPercents,
            _recipients,
            msg.sender
        );

        _deposit(
            _tokenAddress,
            _allocation * _recipients.length,
            address(milestoneContract)
        );

        emit CreateMilestoneContract(address(milestoneContract), msg.sender);
    }
}
