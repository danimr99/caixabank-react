import { useRef } from "react";

import { useToggle } from "../../hooks";

export const useOptionsMenu = () => {
  const {
    isOpened: isMenuOpened,
    open: openMenu,
    close: closeMenu,
  } = useToggle();
  const anchorRef = useRef(null);

  const handleOpenMenu = (event) => {
    anchorRef.current = event?.currentTarget;
    openMenu();
  };

  const handleCloseMenu = () => {
    anchorRef.current = null;
    closeMenu();
  };

  return {
    anchorRef,
    isMenuOpened,
    handleOpenMenu,
    handleCloseMenu,
  };
};
