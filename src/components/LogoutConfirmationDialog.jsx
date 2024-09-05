import PropTypes from "prop-types";

import { useGlobalDispatcher } from "../hooks";
import { logout } from "../store";
import { Dialog } from "../ui";

export const LogoutConfirmationDialog = ({ isOpened = false, onClose }) => {
  const { dispatch } = useGlobalDispatcher();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <Dialog
      isOpened={isOpened}
      title="Logout"
      instructions="Are you sure you want to logout?"
      actions={[
        {
          key: "cancel",
          label: "Cancel",
          onClick: onClose,
        },
        {
          key: "logout",
          label: "Logout",
          onClick: handleLogout,
        },
      ]}
      onClose={onClose}
    ></Dialog>
  );
};

LogoutConfirmationDialog.propTypes = {
  isOpened: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
