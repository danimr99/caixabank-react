import PropTypes from "prop-types";
import { TextField } from "@mui/material";

import { getInputType, InputTypes } from "./inputs";

export const Input = ({
  type = InputTypes.TEXT,
  name,
  label,
  value,
  placeholder,
  helperText,
  hasError = false,
  fullWidth = false,
  onChange,
  required = false,
}) => {
  return (
    <TextField
      type={getInputType(type)}
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      helperText={helperText}
      variant="filled"
      margin="dense"
      fullWidth={fullWidth}
      onChange={onChange}
      required={required}
      error={hasError}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(Object.values(InputTypes)),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  hasError: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
