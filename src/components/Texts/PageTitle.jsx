import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export const PageTitle = ({ text }) => {
  return (
    <Typography variant="h4" fontWeight="600" component="h1">
      {text}
    </Typography>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
