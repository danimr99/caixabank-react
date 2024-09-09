/** @import {NotificationsProps} from "../../docs" */

import { useContext } from "react";

import { NotificationsContext } from "./NotificationsContext";
/**
 * Custom hook to use the NotificationsContext.
 *
 * @function
 * @throws {Error} - If the hook is used outside a NotificationsProvider.
 * @returns {NotificationsProps} The notifications context.
 */
export const useNotificationsContext = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error(
      "useNotificationsContext must be used within a NotificationsProvider."
    );
  }

  return context;
};
