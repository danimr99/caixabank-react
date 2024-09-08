/** @import { Account, Transaction, TransactionsSummary, GroupedTransaction } from "../docs" */

import { TransactionConcepts } from "../constants";
import { getCurrentISODatetime } from "./datetime";
import { toNumber } from "./numbers";

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
      amount: toNumber(initialDeposit),
    },
  ];
};

/**
 * Calculates the total income and total outcome of a list of transactions.
 *
 * @function
 * @param {Transaction[]} transactions - List of transactions to summarize.
 * @returns {TransactionsSummary} An object with the total income and total outcome of the transactions.
 */
export const getTotalIncomeOutcome = (transactions) => {
  return transactions.reduce(
    (acc, transaction) => {
      const { amount } = transaction;
      return {
        totalIncome: amount > 0 ? acc.totalIncome + amount : acc.totalIncome,
        totalOutcome:
          amount < 0 ? acc.totalOutcome + amount * -1 : acc.totalOutcome,
      };
    },
    { totalIncome: 0, totalOutcome: 0 }
  );
};

/**
 * Gets the unique transaction concepts from a list of transactions.
 *
 * @function
 * @param {Transaction[]} transactions - List of transactions to extract the concepts from.
 * @returns {string[]} An array with the unique transaction concepts.
 */
export const getUniqueTransactionConcepts = (transactions) => {
  return new Set(transactions.map((transaction) => transaction?.concept));
};

/**
 * Gets the unique transaction years from a list of transactions.
 *
 * @function
 * @param {Transaction[]} transactions - List of transactions to extract the years from.
 * @returns {string[]} An array with the unique transaction years.
 */
export const getUniqueTransactionYears = (transactions) => {
  return new Set(
    transactions.map((transaction) =>
      new Date(transaction?.transactionDate).getFullYear()
    )
  );
};

/**
 * Filters the transactions by concept.
 *
 * @function
 * @param {Transaction[]} transactions - List of transactions to filter.
 * @param {string} concept - The concept to filter the transactions by.
 * @returns {Transaction[]} An array with the transactions filtered by the concept.
 */
export const filterTransactionsByConcept = (transactions, concept) => {
  return transactions.filter((transaction) => transaction?.concept === concept);
};

/**
 * Filters the transactions by year.
 *
 * @function
 * @param {Transaction[]} transactions - List of transactions to filter.
 * @param {number} year - The year to filter the transactions by.
 * @returns {Transaction[]} An array with the transactions filtered by the year.
 */
export const filterTransactionsByYear = (transactions, year) => {
  return transactions.filter(
    (transaction) =>
      new Date(transaction?.transactionDate).getFullYear() === year
  );
};

/**
 * Gets all the transactions from a list of accounts.
 *
 * @function
 * @param {Account[]} accounts - List of accounts to extract the transactions from.
 * @returns {Transaction[]} An array with all the transactions from the accounts.
 */
export const getAllTransactions = (accounts) => {
  return accounts.flatMap((account) => account?.transactions);
};

/**
 * Sorts the transactions by date.
 *
 * @function
 * @param {Transaction[]} transactions - List of transactions to sort.
 * @returns {Transaction[]} An array with the transactions sorted by date.
 */
export const sortTransactionsByDate = (transactions) => {
  return transactions.sort(
    (a, b) => new Date(a?.transactionDate) - new Date(b?.transactionDate)
  );
};

/**
 * Normalizes the amount of the transactions to be positive.
 *
 * @function
 * @param {Transaction[]} transactions - List of transactions to normalize the amount.
 * @returns {Transaction[]} An array with the transactions with positive amounts.
 */
export const normalizeTransactionsAmount = (transactions) => {
  return transactions.map((transaction) => ({
    ...transaction,
    amount:
      transaction?.amount < 0 ? -transaction?.amount : transaction?.amount,
  }));
};

/**
 * Sums the amount of the transactions grouped by month and year.
 *
 * @function
 * @param {Transaction[]} transactions - List of transactions to group.
 * @returns {GroupedTransaction[]} An object with the transactions grouped by month and year.
 */
export const groupTransactionsByMonthYear = (transactions) => {
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const monthYear = new Date(transaction?.transactionDate).toLocaleString(
      "default",
      {
        month: "long",
        year: "numeric",
      }
    );

    if (!acc[monthYear]) {
      acc[monthYear] = 0;
    }

    acc[monthYear] += transaction?.amount;

    return acc;
  }, {});

  return Object.entries(groupedTransactions).map(([monthYear, amount]) => ({
    monthYear,
    amount,
  }));
};
