/** @import {Transaction, TransactionTableData} from '../docs' */

import { toMoney } from "./currencies";
import { toDatetimeString } from "./datetime";

/**
 * Creates a transaction table data object to be used in a data table.
 *
 * @function
 * @param {Transaction} transaction - The transaction data.
 * @returns {TransactionTableData} - The transaction table data.
 */
export const createTransactionTableData = (transaction) => {
  return {
    id: transaction?.transactionId,
    value: {
      transactionId: transaction?.transactionId,
      transactionDate: toDatetimeString(transaction?.transactionDate),
      concept: transaction?.concept,
      amount: toMoney(transaction?.amount),
    },
  };
};
