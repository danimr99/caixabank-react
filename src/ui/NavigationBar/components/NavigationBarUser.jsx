import PropTypes from "prop-types";

import { useGlobalState, useToggle } from "../../../hooks";
import { Stores } from "../../../store";
import { Icons } from "../..";
import { NavigationBarItem } from "./NavigationBarItem";
import { LogoutConfirmationDialog } from "../../../components";

export const NavigationBarUser = ({ isSideMenuExpanded }) => {
  const { user } = useGlobalState(Stores.USER);
  const {
    isOpened: isLogoutConfirmationDialogOpen,
    open: openLogoutConfirmationDialog,
    close: closeLogoutConfirmationDialog,
  } = useToggle();

  return (
    <>
      <LogoutConfirmationDialog
        isOpened={isLogoutConfirmationDialogOpen}
        onClose={closeLogoutConfirmationDialog}
      />

      <NavigationBarItem
        icon={Icons.USER}
        label={user?.fullName}
        isSideMenuExpanded={isSideMenuExpanded}
        onClick={openLogoutConfirmationDialog}
      />
    </>
  );
};

NavigationBarUser.propTypes = {
  isSideMenuExpanded: PropTypes.bool.isRequired,
};
