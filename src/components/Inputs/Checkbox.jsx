import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

export const Checkbox = ({
  name,
  label,
  isChecked = false,
  isIndeterminated = false,
  disabled = false,
  required = false,
  onChange,
}) => {
  return (
    <FormControlLabel
      name={name}
      label={label}
      disabled={disabled}
      required={required}
      control={
        <MuiCheckbox
          checked={isChecked}
          indeterminate={isIndeterminated}
          onChange={onChange}
        />
      }
    />
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isIndeterminated: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
