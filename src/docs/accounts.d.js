import "./transactions.d.js";

/**
 * @typedef {Object} Account
 * @property {number} accountId - The account ID.
 * @property {string} bank - The bank name.
 * @property {string} accountAlias - The account alias.
 * @property {string} iban - The IBAN number.
 * @property {number} balance - The account balance.
 * @property {Transaction[]} transactions - The transactions history of the account.
 * @property {boolean} isSharedAccount - Whether the account is shared or not.
 */
