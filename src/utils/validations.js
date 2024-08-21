import { isNumber } from "./numbers";

/**
 * Validates if a value is not empty.
 *
 * @param {string} value - The value to be validated.
 * @returns {boolean} Whether the value is valid or not.
 * @throws {Error} If the value is not a string.
 */
export const requiredValidationFn = (value) => {
  if (typeof value !== "string") {
    throw new Error(
      `requiredValidationFn expects a string. Received: ${value} of type ${typeof value}`
    );
  }

  return value.trim().length > 0;
};

/**
 *
 * @param {string} value - The value to be validated.
 * @param {object} options - The options object.
 * @param {number} options.min - The minimum length allowed.
 * @param {boolean} options.minIncluded - Whether the minimum length is included or not.
 * @param {number} options.max - The maximum length allowed.
 * @param {boolean} options.maxIncluded - Whether the maximum length is included or not.
 * @returns {boolean} Whether the value is valid or not.
 * @throws {Error} If the value is not a string.
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
 * @param {string} value - The value to be validated.
 * @returns {boolean} Whether the value is valid or not.
 * @throws {Error} If the value is not a string.
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
 * @param {*} value - The value to be validated.
 * @param {*} options - The options object.
 * @param {*} options.min - The minimum value allowed.
 * @param {*} options.minIncluded - Whether the minimum value is included or not.
 * @param {*} options.max - The maximum value allowed.
 * @param {*} options.maxIncluded - Whether the maximum value is included or not.
 * @returns {boolean} Whether the value is valid or not.
 * @throws {Error} If the value is not a number.
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
