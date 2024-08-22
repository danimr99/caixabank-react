import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

export const Checkbox = ({ name, label, control, validations }) => {
  const { field } = useController({
    name,
    control,
    rules: validations,
  });

  return (
    <FormControlLabel
      name={name}
      label={label}
      control={
        <MuiCheckbox
          checked={field?.value}
          indeterminate={false}
          onChange={field?.onChange}
        />
      }
    />
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
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
};
