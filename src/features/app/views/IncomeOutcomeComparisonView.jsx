import { useMemo } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material";

import {
  createPieChartData,
  getAllTransactions,
  getTotalIncomeOutcome,
} from "../../../utils";
import { PieChart, ViewBox } from "../../../ui";

export const IncomeOutcomeComparisonView = ({ accounts }) => {
  const theme = useTheme();
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

IncomeOutcomeComparisonView.propTypes = {
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
};
