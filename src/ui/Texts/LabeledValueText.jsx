import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export const LabeledValueText = ({ label, value }) => {
  return (
    <>
      <Typography variant="subtitle" fontWeight={600} gutterBottom>
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </>
  );
};

LabeledValueText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
