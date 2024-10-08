import { AppBar as MuiAppBar, styled } from "@mui/material";

import { DRAWER_WIDTH } from "../..";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme?.zIndex?.drawer + 1,
  transition: theme?.transitions?.create(["width", "margin"], {
    easing: theme?.transitions?.easing?.sharp,
    duration: theme?.transitions?.duration?.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme?.transitions?.create(["width", "margin"], {
      easing: theme?.transitions?.easing?.sharp,
      duration: theme?.transitions?.duration?.enteringScreen,
    }),
  }),
}));
