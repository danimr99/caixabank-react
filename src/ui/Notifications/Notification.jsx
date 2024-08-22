import PropTypes from "prop-types";

import { NotificationDurations, NotificationTypes } from "./notifications";
import { Snackbar } from "./Snackbar";
import { Alert } from "./Alert";

export const Notification = ({
  type,
  isVisible = false,
  title,
  message,
  duration = NotificationDurations.SHORT,
  onClose,
}) => {
  return (
    <Snackbar isVisible={isVisible} duration={duration} onClose={onClose}>
      <Alert type={type} title={title} message={message} />
    </Snackbar>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(Object.values(NotificationTypes)).isRequired,
  isVisible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.oneOf(Object.values(NotificationDurations)),
  onClose: PropTypes.func.isRequired,
};
