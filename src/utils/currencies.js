import { Locales, Currencies } from "../constants";

export const toMoney = (
  value,
  options = {
    locale: Locales.ES,
    currency: Currencies.EUR,
  }
) => {
  return value.toLocaleString(options?.locale, {
    style: "currency",
    currency: options?.currency,
  });
};
