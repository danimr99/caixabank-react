import { useGlobalState, useNotification, useToggle } from "../hooks";
import { PageLayout } from "../layouts";
import {
  AccountsList,
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
  const {
    notification,
    isVisible: isNotificationVisible,
    showNotification,
    hideNotification,
  } = useNotification();

  return (
    <>
      <CreateAccountDialog
        isOpened={isCreateAccountModalOpened}
        onClose={closeCreateAccountModal}
        showNotification={showNotification}
      />

      <SnackbarAlert
        type={notification?.type}
        isVisible={isNotificationVisible}
        title={notification?.title}
        message={notification?.message}
        duration={notification?.duration}
        onClose={hideNotification}
      />

      <PageLayout title="Accounts">
        {accounts.length > 0 ? (
          <AccountsList accounts={accounts} />
        ) : (
          <Alert
            type={NotificationTypes.INFO}
            title="No accounts"
            message="You don't have any accounts yet. Create one to get started."
          />
        )}
      </PageLayout>

      {!isCreateAccountModalOpened && !isNotificationVisible && (
        <FloatingActionButton
          icon={Icons.ADD}
          label="Create account"
          expandable
          withAnimation
          onClick={openCreateAccountModal}
        />
      )}
    </>
  );
};
