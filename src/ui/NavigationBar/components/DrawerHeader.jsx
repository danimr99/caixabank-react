import { styled } from "@mui/material";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme?.spacing(0, 1),
  ...theme?.mixins?.toolbar, // necessary for content to be below app bar
}));
