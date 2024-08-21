import { Locales, Currencies } from "../constants";
import { isNumber, toNumber } from "./numbers";

/**
 * Converts a number to money format.
 *
 * @param {number} value - The number to convert to money.
 * @param {object} options - The options to format the number.
 * @param {string} options.locale - The locale to format the number.
 * @param {string} options.currency - The currency to format the number.
 * @returns {string} The number formatted as money.
 * @throws {Error} If the input is not a number.
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
        `toMoney expects a number. Received: ${value} of type ${typeof value}.`
      );
    }
  }

  return value.toLocaleString(options?.locale, {
    style: "currency",
    currency: options?.currency,
    useGrouping: options?.locale === Locales.ES ? "always" : "auto",
  });
};
