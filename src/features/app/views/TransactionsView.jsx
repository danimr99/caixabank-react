import { useMemo } from "react";
import PropTypes from "prop-types";

import {
  createTransactionTableData,
  getAllTransactions,
  sortTransactionsByDate,
} from "../../../utils";
import { PaginationTable, ViewBox } from "../../../ui";

const RECENT_TRANSACTIONS_QUANTITY = 10;
const TABLE_COLUMNS = Object.freeze([
  "Transaction ID",
  "Date",
  "Concept",
  "Amount",
]);

export const TransactionsView = ({
  accounts,
  showLatestTransactionsOnly = false,
}) => {
  const rows = useMemo(() => {
    const allTransactions = sortTransactionsByDate(
      getAllTransactions(accounts)
    ).reverse();

    return showLatestTransactionsOnly
      ? allTransactions
          .slice(0, RECENT_TRANSACTIONS_QUANTITY)
          .map((transaction) => createTransactionTableData(transaction))
      : allTransactions.map((transaction) =>
          createTransactionTableData(transaction)
        );
  }, [accounts, showLatestTransactionsOnly]);

  return (
    <ViewBox
      title={
        showLatestTransactionsOnly
          ? `Latest ${RECENT_TRANSACTIONS_QUANTITY} transactions`
          : "Transactions history"
      }
    >
      <PaginationTable columns={TABLE_COLUMNS} rows={rows} />
    </ViewBox>
  );
};

TransactionsView.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      accountId: PropTypes.number.isRequired,
      bank: PropTypes.string.isRequired,
      accountAlias: PropTypes.string.isRequired,
      iban: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      transactions: PropTypes.array.isRequired,
      isSharedAccount: PropTypes.bool.isRequired,
    })
  ).isRequired,
  showLatestTransactionsOnly: PropTypes.bool,
};
