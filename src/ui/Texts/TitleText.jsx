import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export const TitleText = ({ text }) => (
  <Typography variant="h4" fontWeight="600" component="h1">
    {text}
  </Typography>
);

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
};
