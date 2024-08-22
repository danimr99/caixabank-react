import { Locales, Currencies } from "../constants";
import { isNumber, toNumber } from "./numbers";

/**
 * Converts a value to money format.
 *
 * @function
 * @param {number|string} value - The value to convert to money.
 * @param {object} options - The options to format the number.
 * @param {string} options.locale - The locale to format the number.
 * @param {string} options.currency - The currency to format the number.
 * @throws {Error} If the value cannot be converted.
 * @returns {string} The number formatted as money.
 */
export const toMoney = (
  value,
  options = {
    locale: Locales.ES,
    currency: Currencies.EUR,
  }
) => {
  if (!isNumber(value)) {
    if (typeof value === "string") {
      value = toNumber(value);
    } else {
      throw new Error(
        `toMoney expects a number or a string that can be converted internally to number. Received: ${value} of type ${typeof value}.`
      );
    }
  }

  return value?.toLocaleString(options?.locale, {
    style: "currency",
    currency: options?.currency,
    useGrouping: options?.locale === Locales.ES ? "always" : "auto",
  });
};
