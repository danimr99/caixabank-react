import { useEffect, useState } from "react";

import { LocalStorageKeys } from "../constants";
import { Themes, darkTheme, lightTheme } from "../theme";
import { getLocalStorageItem, setLocalStorageItem } from "../utils";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    getLocalStorageItem(LocalStorageKeys.THEME) ?? Themes.LIGHT
  );

  useEffect(() => {
    setLocalStorageItem(LocalStorageKeys.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previousTheme) =>
      previousTheme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
    );
  };

  const getThemeConfig = () => {
    return theme === Themes.LIGHT ? lightTheme : darkTheme;
  };

  return { theme, toggleTheme, getThemeConfig };
};
