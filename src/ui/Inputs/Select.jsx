import PropTypes from "prop-types";
import { useController } from "react-hook-form";
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
  placeholder,
  helperText,
  control,
  validations,
  fullWidth = false,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: validations,
  });

  return (
    <FormControl
      variant="filled"
      margin="dense"
      error={Boolean(fieldState?.error)}
      fullWidth={fullWidth}
    >
      <InputLabel
      // id={`select-${name}-label`}
      >
        {label}
      </InputLabel>
      <MuiSelect
        // id={`select-${name}`}
        // labelId={`select-${name}-label`}
        name={name}
        label={label}
        value={field?.value}
        placeholder={placeholder}
        onChange={field?.onChange}
      >
        {options.map((option) => (
          <MenuItem key={option?.label} value={option?.value}>
            {option?.label}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText>
        {fieldState?.error?.message || (!fieldState?.isDirty ? helperText : "")}
      </FormHelperText>
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
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  control: PropTypes.object.isRequired,
  validations: PropTypes.shape({
    required: PropTypes.shape({
      value: PropTypes.bool,
      message: PropTypes.string,
    }),
    min: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    max: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    minLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    maxLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    pattern: PropTypes.shape({
      value: PropTypes.string,
      message: PropTypes.string,
    }),
    validate: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      message: PropTypes.string,
    }),
  }),
  fullWidth: PropTypes.bool,
};
