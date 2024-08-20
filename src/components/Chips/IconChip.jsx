import PropTypes from "prop-types";
import { Chip } from "@mui/material";

import { Colors } from "../colors";
import { Icon, Icons } from "../Icons";

export const IconChip = ({ iconName, iconColor, label, ...muiProps }) => {
  return (
    <Chip
      icon={<Icon name={iconName} color={iconColor} />}
      label={label}
      variant="filled"
      {...muiProps}
    />
  );
};

IconChip.propTypes = {
  iconName: PropTypes.oneOf(Object.values(Icons)).isRequired,
  iconColor: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(Colors)),
    PropTypes.string,
  ]),
  label: PropTypes.string.isRequired,
};
