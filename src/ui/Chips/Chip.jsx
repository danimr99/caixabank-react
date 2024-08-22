import PropTypes from "prop-types";
import { Chip as MuiChip } from "@mui/material";

export const Chip = ({ label, ...muiProps }) => {
  return <MuiChip label={label} variant="filled" {...muiProps} />;
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
};
