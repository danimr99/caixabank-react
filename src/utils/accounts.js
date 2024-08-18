import { generateRandomNumber } from "./numbers";

/**
 * Generates a random IBAN following the pattern
 * ESXX XXXX XXXX XXXX XXXX XXXX.
 *
 * @returns {string} A random IBAN
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
 * @param {object[]} accountsList - The current existing list of accounts.
 * @returns {number} A new account ID.
 */
export const generateAccountId = (accountsList) => {
  return accountsList.length + 1;
};
