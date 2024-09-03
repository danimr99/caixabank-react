import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Alert as MuiAlert, AlertTitle, Button } from "@mui/material";

import { NotificationTypes } from "./notifications";

export const Alert = forwardRef(function Alert(
  { type = NotificationTypes.INFO, title, message, onClickAction, actionLabel },
  ref
) {
  return (
    <MuiAlert
      ref={ref}
      severity={type}
      variant="filled"
      action={
        actionLabel &&
        onClickAction && (
          <Button color="inherit" size="small" onClick={onClickAction}>
            {actionLabel}
          </Button>
        )
      }
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </MuiAlert>
  );
});

Alert.propTypes = {
  type: PropTypes.oneOf(Object.values(NotificationTypes)),
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClickAction: PropTypes.func,
  actionLabel: PropTypes.string,
};
