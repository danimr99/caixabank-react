import { useMemo } from "react";

import {
  createTransactionTableData,
  getAllTransactions,
  sortTransactionsByDate,
} from "../../../../utils";
import { useGlobalState } from "../../../../hooks";
import { Stores } from "../../../../store";
import { PaginationTable, ViewBox } from "../../../../ui";

const RECENT_TRANSACTIONS_QUANTITY = 5;
const TABLE_COLUMNS = Object.freeze([
  "Transaction ID",
  "Date",
  "Concept",
  "Amount",
]);

export const RecentTransactionsView = () => {
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const rows = useMemo(() => {
    const allTransactions = sortTransactionsByDate(
      getAllTransactions(accounts)
    );

    return allTransactions
      .slice(0, RECENT_TRANSACTIONS_QUANTITY)
      .map((transaction) => createTransactionTableData(transaction));
  }, [accounts]);

  return (
    <ViewBox title={`Latest ${RECENT_TRANSACTIONS_QUANTITY} transactions`}>
      <PaginationTable columns={TABLE_COLUMNS} rows={rows} />
    </ViewBox>
  );
};
