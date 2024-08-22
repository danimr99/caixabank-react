import { memo } from "react";
import PropTypes from "prop-types";
import * as MuiIcons from "@mui/icons-material";

import { Colors } from "../colors";
import { IconSizes } from "./icons";

export const Icon = memo(function Icon({
  name,
  color,
  size = IconSizes.MEDIUM,
}) {
  const IconComponent = MuiIcons[name];

  if (!IconComponent) {
    throw new Error(`Icon ${name} does not exist.`);
  }

  return <IconComponent color={color} fontSize={size} />;
});

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(Colors)),
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(IconSizes)),
    PropTypes.string,
  ]),
};
