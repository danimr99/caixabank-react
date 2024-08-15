import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3F90CE",
    },
    secondary: {
      main: "#373F51",
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
