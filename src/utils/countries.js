import { Countries, Locales } from "../constants";

/**
 * Translates a country name from one language to another.
 *
 * @function
 * @param {string} country - Country name to be translated.
 * @param {string} originLanguage - Locale of the language to be translated from.
 * @param {string} destinationLanguage - Locale of the language to be translated to.
 * @returns {string} - Translated country name.
 */
export const translateCountry = (
  country,
  originLanguage = Locales.ES,
  destinationLanguage = Locales.US
) => {
  const countryKey = Object.keys(Countries[originLanguage]).find(
    (key) => Countries[originLanguage][key] === country
  );
  return Countries[destinationLanguage][countryKey];
};
