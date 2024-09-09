/** @import {Notification} from "../docs" */

import { useState } from "react";

import { useToggle } from "./useToggle";
import { NotificationDurations, NotificationTypes } from "../ui";

const initialNotificationState = Object.freeze({
  type: NotificationTypes.INFO,
  title: "",
  message: "",
  duration: NotificationDurations.LONG,
});

/**
 * Custom hook to manage notifications.
 *
 * @function
 * @returns {{
 * isVisible: boolean,
 * notification: Notification,
 * showNotification: function(string, string, string, number): void,
 * hideNotification: function(): void
 * }} Notification object.
 */
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
