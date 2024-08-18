import { Grid, Typography } from "@mui/material";

import { useGlobalState, useToggle } from "../hooks";
import { NavigationLayout, PageContentLayout, Spacing } from "../layouts";
import {
  AccountCard,
  Alert,
  CreateAccountDialog,
  FloatingActionButton,
  Icons,
} from "../components";

export const AccountsPage = () => {
  const { accounts } = useGlobalState("accounts");
  const {
    isOpened: isCreateAccountModalOpened,
    open: openCreateAccountModal,
    close: closeCreateAccountModal,
  } = useToggle(false);

  return (
    <>
      <CreateAccountDialog
        isOpened={isCreateAccountModalOpened}
        onClose={closeCreateAccountModal}
      />

      <NavigationLayout>
        <Typography variant="h4" fontWeight="600" component="h1">
          My Accounts
        </Typography>

        <PageContentLayout>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: Spacing.MD,
            }}
          >
            {accounts.map((account) => (
              <AccountCard key={account?.accountId} account={account} />
            ))}
          </Grid>

          {accounts?.length === 0 && (
            <Grid item justifyContent="center" alignItems="center">
              <Alert type="warning" message="No accounts found. " />
            </Grid>
          )}
        </PageContentLayout>

        <FloatingActionButton
          icon={Icons.ADD}
          onClick={openCreateAccountModal}
        />
      </NavigationLayout>
    </>
  );
};
