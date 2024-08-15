import PropTypes from "prop-types";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { useThemeContext } from "../contexts/theme/useThemeContext";

export const AppTheme = ({ children }) => {
  const { getPalette } = useThemeContext();

  return (
    <ThemeProvider theme={getPalette()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

AppTheme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
