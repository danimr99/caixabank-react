import PropTypes from "prop-types";
import { IconButton } from "@mui/material";

import { Icon, Icons } from "../Icons";

export const NavigationBarMenuButton = ({
  isSideMenuExpanded,
  expandSideMenu,
}) => {
  return (
    <IconButton
      color="inherit"
      onClick={expandSideMenu}
      edge="start"
      sx={{
        marginRight: 5,
        ...(isSideMenuExpanded && { display: "none" }),
        ...(!isSideMenuExpanded && {
          display: { xs: "none", md: "block" },
        }),
      }}
    >
      <Icon name={Icons.NAVIGATION_BAR_MENU} />
    </IconButton>
  );
};

NavigationBarMenuButton.propTypes = {
  isSideMenuExpanded: PropTypes.bool,
  expandSideMenu: PropTypes.func.isRequired,
};
