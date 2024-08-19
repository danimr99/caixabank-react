import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#007EAE",
    },
    secondary: {
      main: "#010F2A",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
