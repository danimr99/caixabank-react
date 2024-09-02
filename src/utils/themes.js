import { Themes } from "../theme";

export const getBrowserThemeMode = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? Themes.DARK
    : Themes.LIGHT;
};
