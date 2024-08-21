import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export const NavigationBarTitle = ({ text }) => {
  return (
    <Typography variant="h6" component="div">
      {text}
    </Typography>
  );
};

NavigationBarTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
