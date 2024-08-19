import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Alert as MuiAlert } from "@mui/material";

import { NotificationTypes } from "../notifications";

export const Alert = forwardRef(function Alert(
  { type = NotificationTypes.INFO, message },
  ref
) {
  return (
    <MuiAlert ref={ref} severity={type}>
      {message}
    </MuiAlert>
  );
});

Alert.propTypes = {
  type: PropTypes.oneOf(Object.values(NotificationTypes)),
  message: PropTypes.string.isRequired,
};
