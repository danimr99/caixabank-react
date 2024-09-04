/**
 * Checks if a value is a number.
 *
 * @function
 * @param {any} value - The value to check if it is a number.
 * @returns {boolean} Whether the value is a number or not.
 */
export const isNumber = (value) => {
  return !isNaN(value) && typeof value === "number";
};

/**
 * Converts a value to a number.
 *
 * @function
 * @param {any} value - The value to convert to a number.
 * @returns {number} The value converted to a number.
 * @throws {Error} If the input cannot be converted to a number.
 */
export const toNumber = (value) => {
  const convertedValue = Number(value);

  if (isNumber(convertedValue)) {
    return convertedValue;
  } else {
    throw new Error(
      `toNumber cannot convert ${value} of type ${typeof value} to a number.`
    );
  }
};

/**
 * Generates a random number between a range.
 *
 * @function
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random number between the range.
 */
export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
