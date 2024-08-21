import { useState } from "react";

import { useToggle } from "./useToggle";
import { NotificationDurations, NotificationTypes } from "../components";

const initialState = Object.freeze({
  type: NotificationTypes.INFO,
  title: "",
  message: "",
  duration: NotificationDurations.LONG,
});

export const useNotification = () => {
  const { isOpened, open, close } = useToggle();
  const [notification, setNotification] = useState(initialState);

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
    isVisible: isOpened,
    notification,
    showNotification,
    hideNotification,
  };
};
