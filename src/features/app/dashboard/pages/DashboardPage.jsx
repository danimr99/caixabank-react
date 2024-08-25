import { Grid, Typography } from "@mui/material";

import { PageLayout } from "../../layouts";
import { Spacing, ViewBox } from "../../../../ui";
import {
  AccountsSummaryView,
  IncomeOutcomeChartView,
  RecentTransactionsView,
} from "../components";

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
          <ViewBox>
            <Typography variant="h6" fontWeight={500}>
              History by category (Bar chart en un timeline por concepto de
              transacciones)
            </Typography>
          </ViewBox>
        </Grid>

        <Grid item xs={12}>
          <RecentTransactionsView />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
