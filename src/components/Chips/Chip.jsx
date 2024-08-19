import PropTypes from "prop-types";
import { Chip as MuiChip } from "@mui/material";

import { Colors } from "../colors";

export const Chip = ({ label, color = Colors.PRIMARY, sx }) => {
  return <MuiChip label={label} variant="filled" color={color} sx={sx} />;
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.values(Colors)),
  sx: PropTypes.object,
};
