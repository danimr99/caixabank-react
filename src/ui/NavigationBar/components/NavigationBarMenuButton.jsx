import PropTypes from "prop-types";
import { IconButton } from "@mui/material";

import { Icons, Icon } from "../../Icon";

export const NavigationBarMenuButton = ({
  isSideMenuExpanded,
  expandSideMenu,
}) => (
  <IconButton
    color="inherit"
    edge="start"
    sx={{
      marginRight: 5,
      ...(isSideMenuExpanded && { display: "none" }),
      ...(!isSideMenuExpanded && {
        display: {
          xs: "none",
          md: "block",
        },
      }),
    }}
    onClick={expandSideMenu}
  >
    <Icon name={Icons.NAVIGATION_BAR_MENU} />
  </IconButton>
);

NavigationBarMenuButton.propTypes = {
  isSideMenuExpanded: PropTypes.bool.isRequired,
  expandSideMenu: PropTypes.func.isRequired,
};
