/**
 * @typedef {"error" | "info" | "success" | "warning"} NotificationType - The type of the notification.
 */

/**
 * @typedef {3000 | 5000} NotificationDuration - The duration of the notification.
 */

/**
 * @typedef {object} Notification
 * @property {NotificationType} type - The type of the notification.
 * @property {string} title - The title of the notification.
 * @property {string} message - The message of the notification.
 * @property {NotificationDuration} duration - The duration of the notification.
 */

/**
 * @typedef {object} NotificationsContext
 * @property {Notification} notification - The notification to display.
 * @property {boolean} isNotificationVisible - Whether the notification is visible.
 * @property {function(Notification): void} showNotification - Function to show a notification.
 * @property {function(): void} hideNotification - Function to hide the notification.
 */

export default {};
