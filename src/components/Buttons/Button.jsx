import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

import { ButtonTypes } from "./buttons";

export const Button = ({
  type = ButtonTypes.BUTTON,
  label,
  disabled = false,
  fullWidth = false,
  onClick,
}) => {
  return (
    <MuiButton
      type={type}
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};
