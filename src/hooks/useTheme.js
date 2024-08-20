import { useEffect, useState } from "react";

import { LocalStorageKeys, Themes } from "../constants";
import { getLocalStorageItem, setLocalStorageItem } from "../utils";
import { darkTheme, lightTheme } from "../theme";

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

  const getPalette = () => {
    return theme === Themes.LIGHT ? lightTheme : darkTheme;
  };

  return { theme, toggleTheme, getPalette };
};
