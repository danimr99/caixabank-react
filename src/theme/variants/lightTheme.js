import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#007EAE",
    },
    secondary: {
      main: "#007EAE",
    },
    success: {
      main: green.A400,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
