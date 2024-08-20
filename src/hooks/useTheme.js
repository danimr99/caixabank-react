import { useEffect, useState } from "react";

import { LocalStorageKeys, Themes } from "../constants";
import { useLocalStorage } from "./";
import { darkTheme, lightTheme } from "../theme";

export const useTheme = () => {
  const { getItem, setItem } = useLocalStorage();
  const [theme, setTheme] = useState(
    getItem(LocalStorageKeys.THEME) ?? Themes.LIGHT
  );

  useEffect(() => {
    setItem(LocalStorageKeys.THEME, theme);
  }, [theme, setItem]);

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
