import PropTypes from "prop-types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Icon } from "../..";

export const NavigationBarItem = ({
  label,
  icon,
  onClick,
  isSideMenuExpanded,
}) => (
  <ListItem
    key={label}
    disablePadding
    sx={{ display: "block" }}
    onClick={onClick}
  >
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: isSideMenuExpanded ? "initial" : "center",
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: isSideMenuExpanded ? 3 : "auto",
          justifyContent: "center",
          color: "text.secondary",
        }}
      >
        <Icon name={icon} />
      </ListItemIcon>
      <ListItemText
        primary={label}
        sx={{ opacity: isSideMenuExpanded ? 1 : 0 }}
        primaryTypographyProps={{
          variant: "subtitle1",
          color: "text.secondary",
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  </ListItem>
);

NavigationBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSideMenuExpanded: PropTypes.bool.isRequired,
};
