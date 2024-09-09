/** @import {Account} from "../../../../../docs" */

import { useContext } from "react";

import { AccountOperationsContext } from "./AccountOperationsContext";

/**
 * Custom hook to access account operations context.
 *
 * @function
 * @returns {{
 * selectAccount: function(Account): void,
 * showAccountDetails: {
 *  navigateToAccountDetails: function(): void
 * },
 * createAccount: {
 *  isCreateAccountDialogOpened: boolean,
 *  openCreateAccountDialog: function(): void,
 *  closeCreateAccountDialog: function(): void
 * },
 * createTransaction: {
 *  isCreateTransactionDialogOpened: boolean,
 *  openCreateTransactionDialog: function(): void,
 *  closeCreateTransactionDialog: function(): void
 * },
 * renameAccount: {
 *  isRenameAccountDialogOpened: boolean,
 *  openRenameAccountDialog: function(): void,
 *  closeRenameAccountDialog: function(): void
 * },
 * deleteAccount: {
 *  isDeleteAccountConfirmationDialogOpened: boolean,
 *  openDeleteAccountConfirmationDialog: function(): void,
 *  closeDeleteAccountConfirmationDialog: function(): void
 * },
 * }} Account operations context.
 */
export const useAccountOperationsContext = () => {
  const context = useContext(AccountOperationsContext);

  if (!context) {
    throw new Error(
      "useOperationsContext must be used within an OperationsProvider."
    );
  }

  return context;
};
