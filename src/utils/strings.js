/**
 * Converts a string to camel case.
 *
 * @param {string} str - The string to convert to camel case.
 * @returns {string} The string in camel case.
 * @throws {Error} If the input is not a string.
 */
export const toCamelCase = (str) => {
  if (typeof str !== "string") {
    throw new Error(
      `toCamelCase expects a string. Received: ${str} of type ${typeof str}.`
    );
  }

  return str?.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};
