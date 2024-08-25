import { useMemo } from "react";

import { createTransactionTableData } from "../../../../utils";
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
    const allTransactions = accounts.flatMap((account) => account.transactions);
    allTransactions.sort(
      (a, b) => new Date(b?.transactionDate) - new Date(a?.transactionDate)
    );

    return allTransactions
      .slice(0, RECENT_TRANSACTIONS_QUANTITY)
      .map((transaction) => createTransactionTableData(transaction));
  }, [accounts]);

  return (
    <ViewBox title="Recent Transactions">
      <PaginationTable columns={TABLE_COLUMNS} rows={rows} />
    </ViewBox>
  );
};
