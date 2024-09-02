import { useMemo } from "react";
import { useTheme } from "@mui/material";

import {
  createPieChartData,
  getAllTransactions,
  getTotalIncomeOutcome,
} from "../../../../utils";
import { useGlobalState } from "../../../../hooks";
import { Stores } from "../../../../store";
import { PieChart, ViewBox } from "../../../../ui";

export const IncomeOutcomeChartView = () => {
  const theme = useTheme();
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const { totalIncome, totalOutcome } = useMemo(
    () => getTotalIncomeOutcome(getAllTransactions(accounts)),
    [accounts]
  );

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
