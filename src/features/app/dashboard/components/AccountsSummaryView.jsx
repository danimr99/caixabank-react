import { useMemo } from "react";
import { Grid, Typography } from "@mui/material";

import { useGlobalState } from "../../../../hooks";
import { Stores } from "../../../../store";
import { MoneyText, Spacing, ViewBox } from "../../../../ui";

export const AccountsSummaryView = () => {
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const { totalBalance, highestBalance, lowestBalance } = useMemo(
    () =>
      accounts.reduce(
        (acc, account) => {
          const { balance } = account;
          return {
            totalBalance: acc.totalBalance + balance,
            highestBalance:
              balance > acc.highestBalance ? balance : acc.highestBalance,
            lowestBalance:
              balance < acc.lowestBalance ? balance : acc.lowestBalance,
          };
        },
        {
          totalBalance: 0,
          highestBalance: Number.NEGATIVE_INFINITY,
          lowestBalance: Number.POSITIVE_INFINITY,
        }
      ),
    [accounts]
  );

  return (
    <ViewBox title="Overview">
      {/* <Grid direction="column"> */}
      <Grid>
        <Grid item xs={12}>
          <Grid container direction="row" spacing={Spacing.XL}>
            <Grid item>
              <Typography variant="subtitle">Total balance</Typography>
              <MoneyText amount={totalBalance} />
            </Grid>

            <Grid item>
              <Typography variant="subtitle">Accounts</Typography>
              <Typography variant="h4" fontWeight={600}>
                {accounts?.length}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item direction="row" sx={{ marginTop: Spacing.MD }}> */}
        <Grid item sx={{ marginTop: Spacing.MD }}>
          <Grid container columnSpacing={Spacing.XL}>
            <Grid item>
              <Typography variant="subtitle">Highest balance</Typography>
              <MoneyText amount={accounts?.length > 0 ? highestBalance : 0} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle">Lowest balance</Typography>
              <MoneyText amount={accounts?.length > 0 ? lowestBalance : 0} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ViewBox>
  );
};
