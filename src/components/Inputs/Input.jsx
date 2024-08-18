import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { TextField } from "@mui/material";

import { getInputType, InputTypes } from "./inputs";

export const Input = ({
  type,
  name,
  label,
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
    <TextField
      inputRef={field?.ref}
      type={getInputType(type)}
      name={name}
      label={label}
      value={field?.value}
      placeholder={placeholder}
      helperText={
        fieldState?.error?.message || (!fieldState?.isDirty ? helperText : "")
      }
      error={Boolean(fieldState?.error)}
      variant="filled"
      margin="dense"
      onChange={field?.onChange}
      onBlur={field?.onBlur}
      fullWidth={fullWidth}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(Object.values(InputTypes)).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
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
