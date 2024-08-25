import { useMemo } from "react";
import { useTheme } from "@mui/material";

import { createPieChartData } from "../../../../utils";
import { useGlobalState } from "../../../../hooks";
import { Stores } from "../../../../store";
import { PieChart, ViewBox } from "../../../../ui";

export const IncomeOutcomeChartView = () => {
  const theme = useTheme();
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const { totalIncome, totalOutcome } = useMemo(() => {
    const allTransactions = accounts.flatMap((account) => account.transactions);
    return allTransactions.reduce(
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
  }, [accounts]);

  return (
    <ViewBox title="Income vs Outcome">
      <PieChart
        data={createPieChartData([
          {
            label: "Income",
            value: totalIncome,
            color: theme?.palette?.success?.main,
          },
          {
            label: "Outcome",
            value: totalOutcome,
            color: theme?.palette?.error?.main,
          },
        ])}
      />
    </ViewBox>
  );
};
