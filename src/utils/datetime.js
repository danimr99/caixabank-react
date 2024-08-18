/**
 * Get current date and time in ISO format.
 *
 * @returns {string} Current date and time in ISO format
 */
export const getCurrentISODatetime = () => {
  return new Date().toISOString();
};
