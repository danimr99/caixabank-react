import { isNumber } from "./numbers";

/**
 * Validates if a value is not empty.
 *
 * @function
 * @param {string} value - The value to be validated.
 * @throws {Error} If the value is not a string.
 * @returns {boolean} Whether the value is valid or not.
 */
export const requiredValidationFn = (value) => {
  if (typeof value !== "string") {
    throw new Error(
      `requiredValidationFn expects a string. Received: ${value} of type ${typeof value}`
    );
  }

  return value?.trim()?.length > 0;
};

/**
 * Validates if a value length is within a range.
 *
 * @function
 * @param {string} value - The value to be validated.
 * @param {object} options - The options object.
 * @param {number} options.min - The minimum length allowed.
 * @param {boolean} options.minIncluded - Whether the minimum length is included or not.
 * @param {number} options.max - The maximum length allowed.
 * @param {boolean} options.maxIncluded - Whether the maximum length is included or not.
 * @throws {Error} If the value is not a string.
 * @returns {boolean} Whether the value is valid or not.
 */
export const lengthValidationFn = (
  value,
  { min, minIncluded, max, maxIncluded }
) => {
  if (typeof value !== "string") {
    throw new Error(
      `lengthValidationFn expects a string. Received: ${value} of type ${typeof value}`
    );
  }

  return (
    (minIncluded
      ? value?.trim()?.length >= min
      : value?.trim()?.length > min) &&
    (maxIncluded ? value?.trim()?.length <= max : value?.trim()?.length < max)
  );
};

/**
 * Validates if a value is numeric.
 *
 * @function
 * @param {string} value - The value to be validated.
 * @throws {Error} If the value is not a string.
 * @returns {boolean} Whether the value is valid or not.
 */
export const numericValidationFn = (value) => {
  if (typeof value !== "string") {
    throw new Error(
      `numericValidationFn expects a string. Received: ${value} of type ${typeof value}`
    );
  }

  return isNumber(value);
};

/**
 * Validates if a value is within a numeric range.
 *
 * @function
 * @param {number} value - The value to be validated.
 * @param {object} options - The options object.
 * @param {number} options.min - The minimum value allowed.
 * @param {boolean} options.minIncluded - Whether the minimum value is included or not.
 * @param {number} options.max - The maximum value allowed.
 * @param {boolean} options.maxIncluded - Whether the maximum value is included or not.
 * @throws {Error} If the value is not a number.
 * @returns {boolean} Whether the value is valid or not.
 */
export const numericRangeValidationFn = (
  value,
  { min, minIncluded, max, maxIncluded }
) => {
  if (!isNumber(value)) {
    throw new Error(
      `numericRangeValidationFn expects a number. Received: ${value} of type ${typeof value}`
    );
  }

  return (
    (minIncluded ? value >= min : value > min) &&
    (maxIncluded ? value <= max : value < max)
  );
};
