import { Grid } from "@mui/material";

import { PageLayout } from "../../layouts";
import { Spacing } from "../../../../ui";
import {
  AccountsSummaryView,
  CategoryHistoryView,
  IncomeOutcomeChartView,
  RecentTransactionsView,
} from "../views";

export const DashboardPage = () => {
  return (
    <PageLayout title="Dashboard">
      <Grid container spacing={Spacing.MD}>
        <Grid item xs={12} md={6}>
          <AccountsSummaryView />
        </Grid>

        <Grid item xs={12} md={6}>
          <IncomeOutcomeChartView />
        </Grid>

        <Grid item xs={12}>
          <CategoryHistoryView />
        </Grid>

        <Grid item xs={12}>
          <RecentTransactionsView />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
