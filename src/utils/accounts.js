/** @import { Account, AccountsSummary } from "../docs" */

import { generateRandomNumber } from "./numbers";

/**
 * Generates a random IBAN following the pattern
 * ESXX XXXX XXXX XXXX XXXX XXXX.
 *
 * @function
 * @returns {string} A random IBAN.
 */
export const generateAccountIBAN = () => {
  const randomNumber = Array.from({ length: 22 }, () => {
    return generateRandomNumber(0, 9).toString();
  }).join("");

  return `ES${randomNumber}`.replace(/(.{4})/g, "$1 ");
};

/**
 * Generates a new account ID based on the current list of accounts.
 *
 * @function
 * @param {Account[]} accounts - The current existing list of accounts.
 * @returns {number} A new account ID.
 */
export const generateAccountId = (accounts) => {
  return accounts?.length + 1;
};

/**
 * Calculates the total balance, highest balance, and lowest balance of a list of accounts.
 *
 * @function
 * @param {Account[]} accounts - List of accounts to summarize.
 * @returns {AccountsSummary} An object with the total balance, highest balance, and lowest balance
 * of the accounts.
 */
export const getAccountsSummary = (accounts) => {
  return accounts.reduce(
    (acc, account) => {
      const { balance } = account;
      return {
        totalBalance: acc.totalBalance + balance,
        highestBalance:
          balance > acc.highestBalance ? balance : acc.highestBalance,
        lowestBalance:
          balance < acc.lowestBalance ? balance : acc.lowestBalance,
      };
    },
    {
      totalBalance: 0,
      highestBalance: Number.NEGATIVE_INFINITY,
      lowestBalance: Number.POSITIVE_INFINITY,
    }
  );
};
