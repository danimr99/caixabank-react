import { useParams } from "react-router-dom";

import { toNumber } from "../../../../utils";
import { useGlobalState } from "../../../../hooks";
import { Stores } from "../../../../store";
import { PageLayout } from "../../layouts";
import { AccountDetails } from "../components";
import { useAccountOperationsContext } from "../contexts";

export const AccountsDetailsPage = () => {
  const {
    selectAccount,
    createTransaction: { openCreateTransactionDialog },
    renameAccount: { openRenameAccountDialog },
    deleteAccount: { openDeleteAccountConfirmationDialog },
  } = useAccountOperationsContext();
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const { accountId } = useParams();
  const account = accounts.find(
    (account) => account?.accountId === toNumber(accountId)
  );

  const accountActions = Object.freeze([
    {
      action: "create-transaction",
      label: "Create transaction",
      onClick: () => {
        selectAccount(account);
        openCreateTransactionDialog();
      },
    },
    {
      action: "rename-account",
      label: "Rename account",
      onClick: () => {
        selectAccount(account);
        openRenameAccountDialog();
      },
    },
    {
      action: "delete-account",
      label: "Delete account",
      sx: { color: "error.main" },
      onClick: () => {
        selectAccount(account);
        openDeleteAccountConfirmationDialog();
      },
    },
  ]);

  return (
    <PageLayout
      title={account?.accountAlias}
      showGoBackButton
      showPageActions
      actions={accountActions}
    >
      {account && <AccountDetails account={account} />}
    </PageLayout>
  );
};
