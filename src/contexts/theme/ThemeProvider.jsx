import PropTypes from "prop-types";

import { useTheme } from "../../hooks";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const { themeMode, toggleThemeMode, getPalette } = useTheme();

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode, getPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
