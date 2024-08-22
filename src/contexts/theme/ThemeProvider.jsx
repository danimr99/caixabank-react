import PropTypes from "prop-types";

import { useTheme } from "../../hooks";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme, getThemeConfig } = useTheme();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        getThemeConfig,
      }}
    >
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
