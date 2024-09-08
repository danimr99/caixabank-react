import { useGlobalState } from "../../../../hooks";
import { useAccountOperationsContext } from "../contexts";
import { Stores } from "../../../../store";
import { PageLayout } from "../../layouts";
import { Alert, Icons, NotificationTypes } from "../../../../ui";
import { AccountsList } from "../components";

export const AccountsPage = () => {
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const {
    createAccount: { isCreateAccountDialogOpened, openCreateAccountDialog },
  } = useAccountOperationsContext();

  return (
    <PageLayout
      title="Accounts"
      showFabButton={!isCreateAccountDialogOpened}
      fab={{
        icon: Icons.ADD,
        label: "Create account",
        onClick: openCreateAccountDialog,
      }}
    >
      {accounts?.length > 0 ? (
        <AccountsList accounts={accounts} />
      ) : (
        <Alert
          type={NotificationTypes.INFO}
          title="No accounts"
          message="You do not have any accounts yet. Create one to get started."
        />
      )}
    </PageLayout>
  );
};
