import { useGlobalState, useToggle } from "../../../../hooks";
import { Stores } from "../../../../store";
import { PageLayout } from "../../layouts";
import { Alert, Icons, NotificationTypes } from "../../../../ui";
import { AccountsList, CreateAccountFormDialog } from "../components";

export const AccountsPage = () => {
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const {
    isOpened: isCreateAccountModalOpened,
    open: openCreateAccountModal,
    close: closeCreateAccountModal,
  } = useToggle();

  return (
    <>
      {isCreateAccountModalOpened && (
        <CreateAccountFormDialog
          isOpened={isCreateAccountModalOpened}
          onClose={closeCreateAccountModal}
        />
      )}

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
