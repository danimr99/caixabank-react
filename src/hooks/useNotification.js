import { useState } from "react";

import { useToggle } from "./useToggle";
import { NotificationDurations, NotificationTypes } from "../components";

const initialState = Object.freeze({
  type: NotificationTypes.INFO,
  message: "",
  duration: NotificationDurations.SHORT,
});

export const useNotification = () => {
  const { isOpened, open, close } = useToggle();
  const [notification, setNotification] = useState(initialState);

  const showNotification = (
    type,
    message,
    duration = NotificationDurations.SHORT
  ) => {
    setNotification({ type, message, duration });
    open();
  };

  const hideNotification = () => {
    close();
  };

  return {
    isVisible: isOpened,
    notification,
    showNotification,
    hideNotification,
  };
};
