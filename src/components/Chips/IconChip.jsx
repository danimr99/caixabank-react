import PropTypes from "prop-types";
import { Chip } from "@mui/material";

import { Colors } from "../colors";
import { Icon, Icons } from "../Icons";
import { Spacing } from "../../layouts";

export const IconChip = ({
  iconName,
  iconColor,
  label,
  chipColor = Colors.DEFAULT,
  sx,
}) => {
  return (
    <Chip
      icon={<Icon name={iconName} color={iconColor} />}
      label={label}
      variant="filled"
      color={chipColor}
      sx={{
        paddingLeft: Spacing.XS,
        ...sx,
      }}
    />
  );
};

IconChip.propTypes = {
  iconName: PropTypes.oneOf(Object.values(Icons)).isRequired,
  iconColor: PropTypes.oneOf(Object.values(Colors)),
  label: PropTypes.string.isRequired,
  chipColor: PropTypes.oneOf(Object.values(Colors)),
  sx: PropTypes.object,
};
