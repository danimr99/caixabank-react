/**
 * Get current date and time in ISO format.
 *
 * @function
 * @returns {string} Current date and time in ISO format
 */
export const getCurrentISODatetime = () => {
  return new Date().toISOString();
};

/**
 * Convert an ISO formatted date to a human readable datetime string.
 *
 * @function
 * @param {string} date - Date string to convert.
 * @returns {string} Date string in datetime format.
 */
export const toDatetimeString = (date) => {
  return new Date(date).toLocaleString();
};
