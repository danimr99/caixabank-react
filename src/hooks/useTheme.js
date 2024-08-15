import { useState } from "react";

import { Themes } from "../constants";
import { darkTheme, lightTheme } from "../theme/variants";

export const useTheme = () => {
  const [theme, setTheme] = useState(Themes.LIGHT);

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
