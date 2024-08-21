import PropTypes from "prop-types";

import { useNotification } from "../../hooks";
import { NotificationsContext } from "./NotificationsContext";
import { SnackbarAlert } from "../../components";

export const NotificationsProvider = ({ children }) => {
  const {
    notification,
    isVisible: isNotificationVisible,
    showNotification,
    hideNotification,
  } = useNotification();

  return (
    <NotificationsContext.Provider
      value={{
        notification,
        isNotificationVisible,
        showNotification,
        hideNotification,
      }}
    >
      <SnackbarAlert
        type={notification?.type}
        isVisible={isNotificationVisible}
        title={notification?.title}
        message={notification?.message}
        duration={notification?.duration}
        onClose={hideNotification}
      />

      {children}
    </NotificationsContext.Provider>
  );
};

NotificationsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
