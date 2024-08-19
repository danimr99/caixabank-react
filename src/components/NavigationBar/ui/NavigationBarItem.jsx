import PropTypes from "prop-types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useNavigation } from "../../../hooks";
import { Icon } from "../../";

export const NavigationBarItem = ({
  label,
  icon,
  path,
  isSideMenuExpanded,
}) => {
  const { navigateTo } = useNavigation();

  const handleClick = () => {
    navigateTo(path);
  };

  return (
    <ListItem
      key={label}
      disablePadding
      sx={{ display: "block" }}
      onClick={handleClick}
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
};

NavigationBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isSideMenuExpanded: PropTypes.bool.isRequired,
};
