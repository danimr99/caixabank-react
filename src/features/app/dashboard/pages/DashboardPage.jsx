import { Grid } from "@mui/material";

import { useGlobalState } from "../../../../hooks";
import { Stores } from "../../../../store";
import { PageLayout } from "../../layouts";
import { Spacing } from "../../../../ui";
import {
  CategoryHistoryView,
  IncomeOutcomeComparisonView,
  TransactionsView,
} from "../../views";
import { AccountsSummaryView } from "../views";

export const DashboardPage = () => {
  const { accounts } = useGlobalState(Stores.ACCOUNTS);

  return (
    <PageLayout title="Dashboard">
      <Grid container spacing={Spacing.MD}>
        <Grid item xs={12} md={6}>
          <AccountsSummaryView />
        </Grid>

        <Grid item xs={12} md={6}>
          <IncomeOutcomeComparisonView accounts={accounts} />
        </Grid>

        <Grid item xs={12}>
          <CategoryHistoryView accounts={accounts} />
        </Grid>

        <Grid item xs={12}>
          <TransactionsView accounts={accounts} showLatestTransactionsOnly />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
