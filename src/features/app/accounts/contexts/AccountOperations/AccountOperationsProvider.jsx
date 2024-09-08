import { useRef } from "react";
import PropTypes from "prop-types";

import { Routes } from "../../../../../constants";
import { useNavigation, useToggle } from "../../../../../hooks";
import { AccountOperationsContext } from "./AccountOperationsContext";
import {
  CreateAccountDialog,
  CreateTransactionDialog,
  DeleteAccountConfirmationDialog,
  RenameAccountDialog,
} from "../../components";

export const AccountOperationsProvider = ({ children }) => {
  const { navigateTo } = useNavigation();
  const accountRef = useRef(null);
  const {
    isOpened: isCreateAccountDialogOpened,
    open: openCreateAccountDialog,
    close: closeCreateAccountDialog,
  } = useToggle();
  const {
    isOpened: isCreateTransactionDialogOpened,
    open: openCreateTransactionDialog,
    close: closeCreateTransactionDialog,
  } = useToggle();
  const {
    isOpened: isRenameAccountDialogOpened,
    open: openRenameAccountDialog,
    close: closeRenameAccountDialog,
  } = useToggle();
  const {
    isOpened: isDeleteAccountConfirmationDialogOpened,
    open: openDeleteAccountConfirmationDialog,
    close: closeDeleteAccountConfirmationDialog,
  } = useToggle();

  const selectAccount = (account) => {
    accountRef.current = account;
  };

  const navigateToAccountDetails = () => {
    navigateTo(Routes.ACCOUNT_DETAILS(accountRef.current?.accountId));
  };

  return (
    <AccountOperationsContext.Provider
      value={{
        selectAccount,
        showAccountDetails: {
          navigateToAccountDetails,
        },
        createAccount: {
          isCreateAccountDialogOpened,
          openCreateAccountDialog,
          closeCreateAccountDialog,
        },
        createTransaction: {
          isCreateTransactionDialogOpened,
          openCreateTransactionDialog,
          closeCreateTransactionDialog,
        },
        renameAccount: {
          isRenameAccountDialogOpened,
          openRenameAccountDialog,
          closeRenameAccountDialog,
        },
        deleteAccount: {
          isDeleteAccountConfirmationDialogOpened,
          openDeleteAccountConfirmationDialog,
          closeDeleteAccountConfirmationDialog,
        },
      }}
    >
      {isCreateAccountDialogOpened && (
        <CreateAccountDialog
          isOpened={isCreateAccountDialogOpened}
          onClose={closeCreateAccountDialog}
        />
      )}

      {isCreateTransactionDialogOpened && (
        <CreateTransactionDialog
          isOpened={isCreateTransactionDialogOpened}
          account={accountRef.current}
          onClose={closeCreateTransactionDialog}
        />
      )}

      {isRenameAccountDialogOpened && (
        <RenameAccountDialog
          isOpened={isRenameAccountDialogOpened}
          account={accountRef.current}
          onClose={closeRenameAccountDialog}
        />
      )}

      {isDeleteAccountConfirmationDialogOpened && (
        <DeleteAccountConfirmationDialog
          isOpened={isDeleteAccountConfirmationDialogOpened}
          account={accountRef.current}
          onClose={closeDeleteAccountConfirmationDialog}
        />
      )}

      {children}
    </AccountOperationsContext.Provider>
  );
};

AccountOperationsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
