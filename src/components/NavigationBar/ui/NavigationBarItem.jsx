import PropTypes from "prop-types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CustomIcon } from "../../Icons/CustomIcon";
import { useNavigation } from "../../../hooks";

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
          <CustomIcon iconName={icon} />
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{ opacity: isSideMenuExpanded ? 1 : 0 }}
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
