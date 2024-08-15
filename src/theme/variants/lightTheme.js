import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007EAE",
    },
    secondary: {
      main: "#80BFD7",
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
