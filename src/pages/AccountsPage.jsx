import { Grid } from "@mui/material";

import { useGlobalState, useNotification, useToggle } from "../hooks";
import { PageLayout } from "../layouts";
import {
  AccountCard,
  Alert,
  CreateAccountDialog,
  FloatingActionButton,
  Icons,
  List,
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

      <PageLayout title="Accounts">
        <List>
          {accounts.map((account) => (
            <AccountCard key={account?.accountId} account={account} />
          ))}
        </List>

        {accounts?.length === 0 && (
          <Grid item justifyContent="center" alignItems="center">
            <Alert
              type={NotificationTypes.WARNING}
              message="No accounts found. "
            />
          </Grid>
        )}
      </PageLayout>

      <FloatingActionButton
        icon={Icons.ADD}
        label="Create account"
        expandable
        onClick={openCreateAccountModal}
      />
    </>
  );
};
