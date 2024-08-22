import { DRAWER_WIDTH } from "../../layouts";

export const openedMixin = (theme) => ({
  width: DRAWER_WIDTH,
  transition: theme?.transitions?.create("width", {
    easing: theme?.transitions?.easing?.sharp,
    duration: theme?.transitions?.duration?.enteringScreen,
  }),
  overflowX: "hidden",
});
