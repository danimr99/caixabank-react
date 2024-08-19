import PropTypes from "prop-types";
import { Snackbar } from "@mui/material";

import { NotificationDurations } from "../";

export const BaseSnackbar = ({
  children,
  isVisible = false,
  duration = NotificationDurations.SHORT,
  onClose,
}) => {
  return (
    <Snackbar
      open={isVisible}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {children}
    </Snackbar>
  );
};

BaseSnackbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isVisible: PropTypes.bool,
  duration: PropTypes.oneOf(Object.values(NotificationDurations)),
  onClose: PropTypes.func.isRequired,
};
