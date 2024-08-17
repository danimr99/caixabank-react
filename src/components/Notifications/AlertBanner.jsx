import PropTypes from "prop-types";
import { Alert } from "@mui/material";

import { Alerts } from "../../constants";

export const AlertBanner = ({ type = Alerts.INFO, message }) => {
  return <Alert severity={type}>{message}</Alert>;
};

AlertBanner.propTypes = {
  type: PropTypes.oneOf(Object.values(Alerts)),
  message: PropTypes.string.isRequired,
};
