import { Grid, Typography } from "@mui/material";

import { useGlobalState, useNotification, useToggle } from "../hooks";
import { NavigationLayout, PageContentLayout, Spacing } from "../layouts";
import {
  AccountCard,
  Alert,
  CreateAccountDialog,
  FloatingActionButton,
  Icons,
  NotificationTypes,
  SnackbarAlert,
} from "../components";

export const AccountsPage = () => {
  const { accounts } = useGlobalState("accounts");
  const {
    isOpened: isCreateAccountModalOpened,
    open: openCreateAccountModal,
    close: closeCreateAccountModal,
  } = useToggle(false);
  const { notification, isVisible, showNotification, hideNotification } =
    useNotification();

  return (
    <>
      <CreateAccountDialog
        isOpened={isCreateAccountModalOpened}
        onClose={closeCreateAccountModal}
        showNotification={showNotification}
      />

      <SnackbarAlert
        type={notification?.type}
        isVisible={isVisible}
        message={notification?.message}
        duration={notification?.duration}
        onClose={hideNotification}
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
              <Alert
                type={NotificationTypes.WARNING}
                message="No accounts found. "
              />
            </Grid>
          )}
        </PageContentLayout>
      </NavigationLayout>

      <FloatingActionButton icon={Icons.ADD} onClick={openCreateAccountModal} />
    </>
  );
};
