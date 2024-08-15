import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#C2C2C2",
      paper: "#D6D6D6",
    },
    primary: {
      main: "#003C6C",
    },
    secondary: {
      main: "#003C6C",
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
