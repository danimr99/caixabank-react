import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#010F2A",
    },
    secondary: {
      main: "#007EAE",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
