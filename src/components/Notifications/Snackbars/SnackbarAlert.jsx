import PropTypes from "prop-types";

import {
  Alert,
  NotificationTypes,
  BaseSnackbar,
  NotificationDurations,
} from "..";

export const SnackbarAlert = ({
  type,
  isVisible = false,
  title,
  message,
  duration = NotificationDurations.SHORT,
  onClose,
}) => {
  return (
    <BaseSnackbar isVisible={isVisible} onClose={onClose} duration={duration}>
      <Alert type={type} title={title} message={message} />
    </BaseSnackbar>
  );
};

SnackbarAlert.propTypes = {
  type: PropTypes.oneOf(Object.values(NotificationTypes)).isRequired,
  isVisible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.oneOf(Object.values(NotificationDurations)),
  onClose: PropTypes.func.isRequired,
};
