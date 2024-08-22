import PropTypes from "prop-types";
import { Chip } from "@mui/material";

import { Icon, Icons } from "../Icon";
import { Colors } from "../colors";

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
