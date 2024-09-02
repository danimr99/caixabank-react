/** @import {Transaction} from "../docs" */

/**
 * @typedef {object} Account
 * @property {number} accountId - The account ID.
 * @property {string} bank - The bank name.
 * @property {string} accountAlias - The account alias.
 * @property {string} iban - The IBAN number.
 * @property {number} balance - The account balance.
 * @property {Transaction[]} transactions - The transactions history of the account.
 * @property {boolean} isSharedAccount - Whether the account is shared or not.
 */

/**
 * @typedef {object} AccountsSummary
 * @property {number} totalBalance - The total balance of the accounts.
 * @property {number} highestBalance - The highest balance of the accounts.
 * @property {number} lowestBalance - The lowest balance of the accounts.
 */

export default {};
