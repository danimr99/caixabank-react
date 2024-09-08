import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { Routes } from "../../../../constants";
import { useGlobalDispatcher, useNavigation } from "../../../../hooks";
import { useNotificationsContext } from "../../../../contexts";
import { deleteAccount } from "../../../../store";
import { Dialog, NotificationTypes } from "../../../../ui";

export const DeleteAccountConfirmationDialog = ({
  isOpened = false,
  account,
  onClose,
}) => {
  const { dispatch } = useGlobalDispatcher();
  const { pathname } = useLocation();
  const { navigateTo } = useNavigation();
  const { showNotification } = useNotificationsContext();

  const handleDeleteAccount = () => {
    dispatch(deleteAccount({ accountId: account?.accountId }));
    onClose();

    if (pathname === Routes.ACCOUNT_DETAILS(account?.accountId)) {
      navigateTo(Routes.ACCOUNTS, { replace: true });
    }

    showNotification(
      NotificationTypes.SUCCESS,
      "Account deleted successfully",
      `Your account "${account?.accountAlias}" has been deleted.`
    );
  };

  const handleCannotDeleteAccount = () => {
    onClose();
    showNotification(
      NotificationTypes.ERROR,
      "Cannot delete shared account",
      `You cannot delete the shared account "${account?.accountAlias}" without permission of all account holders.`
    );
  };

  return (
    <Dialog
      isOpened={isOpened}
      title="Delete account"
      instructions={`Are you sure you want to delete "${account?.accountAlias}"? This action is permanent and cannot be undone.`}
      actions={[
        {
          key: "cancel",
          label: "Cancel",
          onClick: onClose,
        },
        {
          key: "confirm",
          label: "Delete account",
          onClick: account?.isSharedAccount
            ? handleCannotDeleteAccount
            : handleDeleteAccount,
        },
      ]}
      onClose={onClose}
    />
  );
};

DeleteAccountConfirmationDialog.propTypes = {
  isOpened: PropTypes.bool,
  account: PropTypes.shape({
    accountId: PropTypes.number,
    bank: PropTypes.string,
    accountAlias: PropTypes.string,
    iban: PropTypes.string,
    balance: PropTypes.number,
    isSharedAccount: PropTypes.bool,
  }),
  onClose: PropTypes.func.isRequired,
};
