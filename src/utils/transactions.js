/** @import { Transaction } from "../docs" */

import { TransactionConcepts } from "../constants";
import { getCurrentISODatetime } from "./datetime";

/**
 * Generates a new transaction ID based on the current list of accounts.
 *
 * @function
 * @param {Transaction[]} transactions - The current existing list of transactions.
 * @returns {number} A new transaction ID.
 */
export const generateTransactionId = (transactions) => {
  return transactions?.length + 1;
};

/**
 * Initializes a transactions list with an initial deposit transaction.
 *
 * @function
 * @param {number} initialDeposit - The initial deposit amount.
 * @returns {Transaction[]} An array with the initial deposit transaction.
 */
export const generateInitialDepositTransaction = (initialDeposit) => {
  return [
    {
      transactionId: generateTransactionId([]),
      transactionDate: getCurrentISODatetime(),
      concept: TransactionConcepts.INITIAL_DEPOSIT,
      amount: initialDeposit,
    },
  ];
};
