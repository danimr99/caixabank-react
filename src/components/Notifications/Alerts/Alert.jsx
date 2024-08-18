import PropTypes from "prop-types";
import { Alert as MuiAlert } from "@mui/material";

import { AlertTypes } from "./alerts";

export const Alert = ({ type = AlertTypes.INFO, message }) => {
  return <MuiAlert severity={type}>{message}</MuiAlert>;
};

Alert.propTypes = {
  type: PropTypes.oneOf(Object.values(AlertTypes)),
  message: PropTypes.string.isRequired,
};
