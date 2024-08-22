import PropTypes from "prop-types";

import { useGlobalDispatcher, useGlobalState } from "../../../hooks";
import { logout, Stores } from "../../../store";
import { Icons } from "../..";
import { NavigationBarItem } from "./NavigationBarItem";

export const NavigationBarUser = ({ isSideMenuExpanded }) => {
  const { user } = useGlobalState(Stores.USER);
  const { dispatch } = useGlobalDispatcher();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <NavigationBarItem
      icon={Icons.USER}
      label={user?.name}
      isSideMenuExpanded={isSideMenuExpanded}
      onClick={handleClick}
    />
  );
};

NavigationBarUser.propTypes = {
  isSideMenuExpanded: PropTypes.bool.isRequired,
};
