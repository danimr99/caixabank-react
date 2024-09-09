/** @import {Account} from "./accounts.d" */
/** @import {TransactionType} from "./transactions.d" */

/**
 * @typedef {object} AccountsState
 * @property {Account[]} accounts - List of accounts.
 */

/**
 * @typedef {object} AddAccountAction
 * @property {string} type - Action type.
 * @property {object} payload - Action payload.
 * @property {string} payload.accountAlias - Account alias.
 * @property {string} payload.bank - Bank name.
 * @property {number} payload.initialDeposit - Initial deposit.
 * @property {boolean} payload.isSharedAccount - Shared account flag.
 */

/**
 * @typedef {object} DeleteAccountAction
 * @property {string} type - Action type.
 * @property {object} payload - Action payload.
 * @property {number} payload.accountId - Account ID.
 */

/**
 * @typedef {object} RenameAccountAction
 * @property {string} type - Action type.
 * @property {object} payload - Action payload.
 * @property {number} payload.accountId - Account ID.
 * @property {string} payload.newAccountAlias - New account alias.
 */

/**
 * @typedef {object} AddTransaction
 * @property {number} accountId - Account ID.
 * @property {TransactionType} transactionType - Transaction type.
 * @property {string} concept - Transaction concept.
 * @property {number} amount - Transaction amount.
 */

/**
 * @typedef {object} AddTransactionAction
 * @property {string} type - Action type.
 * @property {AddTransaction} payload - Action payload.
 */

/**
 * @typedef {object} AddTransference
 * @property {number} accountId - Account ID.
 * @property {number} destinationAccountId - Destination account ID.
 * @property {number} amount - Transaction amount.
 */

/**
 * @typedef {object} AddTransferenceAction
 * @property {string} type - Action type.
 * @property {AddTransference} payload - Action payload.
 */

export default {};
