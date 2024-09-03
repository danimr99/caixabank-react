import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Alert as MuiAlert, AlertTitle } from "@mui/material";

import { NotificationTypes } from "./notifications";

export const Alert = forwardRef(function Alert(
  { type = NotificationTypes.INFO, title, message, action },
  ref
) {
  return (
    <MuiAlert ref={ref} severity={type} variant="filled" action={action}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </MuiAlert>
  );
});

Alert.propTypes = {
  type: PropTypes.oneOf(Object.values(NotificationTypes)),
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.node,
};
