/**
 * Generates a unique identifier.
 *
 * @function
 * @returns {string} A unique identifier.
 */
export const generateUUID = () => {
  return crypto?.randomUUID();
};
