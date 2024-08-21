import { useGlobalState, useToggle } from "../hooks";
import { PageLayout } from "../layouts";
import {
  AccountsList,
  Alert,
  CreateAccountDialog,
  Icons,
  NotificationTypes,
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

      <PageLayout
        title="Accounts"
        showFabButton={!isCreateAccountModalOpened}
        fab={{
          icon: Icons.ADD,
          label: "Create account",
          onClick: openCreateAccountModal,
        }}
      >
        {accounts?.length > 0 ? (
          <AccountsList accounts={accounts} />
        ) : (
          <Alert
            type={NotificationTypes.INFO}
            title="No accounts"
            message="You don't have any accounts yet. Create one to get started."
          />
        )}
      </PageLayout>
    </>
  );
};
