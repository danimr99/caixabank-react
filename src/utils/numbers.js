/**
 * Checks if a value is a number.
 *
 * @param {*} value - The value to check if it is a number.
 * @returns {boolean} Whether the value is a number or not.
 */
export const isNumber = (value) => {
  return !isNaN(value) && typeof value === "number";
};

/**
 * Converts a value to a number.
 *
 * @param {*} value - The value to convert to a number.
 * @returns {number} The value converted to a number.
 * @throws {Error} If the input is not a number.
 */
export const toNumber = (value) => {
  try {
    return Number(value);
  } catch {
    throw new Error(
      `toNumber expects a number. Received: ${value} of type ${typeof value}.`
    );
  }
};

/**
 * Generates a random number between a range.
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random number between the range.
 */
export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
