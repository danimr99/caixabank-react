import PropTypes from "prop-types";
import { Snackbar as MuiSnackbar } from "@mui/material";

import { NotificationDurations } from "./notifications";

export const Snackbar = ({
  children,
  isVisible = false,
  duration = NotificationDurations.SHORT,
  onClose,
}) => {
  return (
    <MuiSnackbar
      open={isVisible}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {children}
    </MuiSnackbar>
  );
};

Snackbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isVisible: PropTypes.bool,
  duration: PropTypes.oneOf(Object.values(NotificationDurations)),
  onClose: PropTypes.func.isRequired,
};
