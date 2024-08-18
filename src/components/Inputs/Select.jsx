import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";

export const Select = ({
  name,
  label,
  options = [],
  selectedValue,
  helperText,
  hasError = false,
  fullWidth = false,
  onChange,
  required = false,
}) => {
  return (
    <FormControl
      variant="filled"
      margin="dense"
      fullWidth={fullWidth}
      error={hasError}
      required={required}
    >
      <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
      <MuiSelect
        id={`select-${name}`}
        labelId={`select-${name}-label`}
        name={name}
        label={label}
        value={selectedValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option?.label} value={option?.value}>
            {option?.label}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  helperText: PropTypes.string,
  hasError: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
