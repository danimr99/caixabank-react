import { toCamelCase } from "./strings";

/**
 * Formats all keys from an object or array of objects to camel case.
 *
 * @param {object | object[]} obj - Object or array of objects to format.
 * @returns {object | object[]} Formatted object or array of objects.
 */
export const format = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((element) => format(element));
  }

  if (typeof obj === "object") {
    return Object.keys(obj).reduce((newObj, key) => {
      newObj[toCamelCase(key)] = format(obj[key]);
      return newObj;
    }, {});
  }

  return obj;
};
