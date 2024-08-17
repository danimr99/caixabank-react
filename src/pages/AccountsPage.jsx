import { Grid, Typography } from "@mui/material";

import { useGlobalState } from "../hooks";
import { NavigationLayout, PageContentLayout } from "../layouts";
import { AccountCard, AlertBanner, FloatingActionButton } from "../components";
import { Icons } from "../constants";

export const AccountsPage = () => {
  const { accounts } = useGlobalState("accounts");

  const openCreateAccountDialog = () => {};

  return (
    <NavigationLayout>
      <Typography variant="h4" fontWeight="600" component="h1">
        My Accounts
      </Typography>

      <PageContentLayout>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "1rem",
          }}
        >
          {accounts.map((account) => (
            <AccountCard key={account?.accountId} account={account} />
          ))}
        </Grid>

        {accounts?.length === 0 && (
          <Grid item justifyContent="center" alignItems="center">
            <AlertBanner type="warning" message="No accounts found. " />
          </Grid>
        )}
      </PageContentLayout>

      <FloatingActionButton
        icon={Icons.ADD}
        onClick={openCreateAccountDialog}
      />
    </NavigationLayout>
  );
};
