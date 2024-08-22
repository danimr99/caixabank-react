import { useState } from "react";

import { useToggle } from "./useToggle";
import { NotificationDurations, NotificationTypes } from "../ui";

const initialNotificationState = Object.freeze({
  type: NotificationTypes.INFO,
  title: "",
  message: "",
  duration: NotificationDurations.LONG,
});

export const useNotification = () => {
  const { isOpened: isVisible, open, close } = useToggle();
  const [notification, setNotification] = useState(initialNotificationState);

  const showNotification = (
    type,
    title,
    message,
    duration = NotificationDurations.LONG
  ) => {
    setNotification({ type, title, message, duration });
    open();
  };

  const hideNotification = () => {
    close();
  };

  return {
    isVisible,
    notification,
    showNotification,
    hideNotification,
  };
};
