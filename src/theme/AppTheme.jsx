import PropTypes from "prop-types";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { useThemeContext } from "../contexts";

export const AppTheme = ({ children }) => {
  const { getThemeConfig } = useThemeContext();

  return (
    <ThemeProvider theme={getThemeConfig()}>
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
