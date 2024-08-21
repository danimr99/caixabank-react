import PropTypes from "prop-types";
import { Menu, MenuItem } from "@mui/material";

export const CardMenu = ({
  anchor,
  isOpened = false,
  options = [],
  onClose,
}) => {
  return (
    <Menu
      anchorEl={anchor}
      open={isOpened}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      onClose={onClose}
    >
      {options.map((option) => (
        <MenuItem
          key={option.action}
          onClick={() => {
            option.onClick();
            onClose();
          }}
          sx={option.sx}
        >
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

CardMenu.propTypes = {
  anchor: PropTypes.object,
  isOpened: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sx: PropTypes.object,
      onClick: PropTypes.func.isRequired,
    })
  ),
  onClose: PropTypes.func.isRequired,
};
