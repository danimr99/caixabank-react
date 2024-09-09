/** @import {ThemeContext} from "../../docs" */

import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

/**
 * Custom hook to use the theme context.
 *
 * @function
 * @throws {Error} - If the hook is used outside a ThemeProvider.
 * @returns {ThemeContext} The theme context.
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider.");
  }

  return context;
};
