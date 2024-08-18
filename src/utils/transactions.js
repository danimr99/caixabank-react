import { TransactionDescriptions } from "../constants";
import { getCurrentISODatetime } from "./";

/**
 * Generates a new transaction ID based on the current list of accounts.
 *
 * @param {object[]} transactionsList - The current existing list of transactions.
 * @returns {number} A new transaction ID.
 */
export const generateTransactionId = (transactionsList) => {
  return transactionsList.length + 1;
};

/**
 * Initializes a transactions list with an initial deposit transaction.
 *
 * @param {number} initialDeposit - The initial deposit amount.
 * @returns {object[]} An array with the initial deposit transaction.
 */
export const generateInitialDepositTransaction = (initialDeposit) => {
  return [
    {
      transactionId: generateTransactionId([]),
      transactionDate: getCurrentISODatetime(),
      description: TransactionDescriptions.INITIAL_DEPOSIT,
      amount: initialDeposit,
    },
  ];
};
