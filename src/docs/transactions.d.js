/**
 * @typedef {object} Transaction
 * @property {number} transactionId - The transaction ID.
 * @property {string} transactionDate - The transaction date in ISO format.
 * @property {string} concept - The transaction concept.
 * @property {number} amount - The transaction amount.
 */

/**
 * @typedef {"Withdrawal" | "Deposit" | "Transfer"} TransactionType - The type of transaction.
 */

/**
 * @typedef {object} TransactionsSummary
 * @property {number} totalIncome - The total income of the transactions.
 * @property {number} totalOutcome - The total outcome of the transactions.
 */

/**
 * @typedef {object} GroupedTransaction
 * @property {string} monthYear - The month and year of the transactions that got grouped.
 * @property {number} amount - The total amount of the transactions that got grouped.
 */

export default {};
