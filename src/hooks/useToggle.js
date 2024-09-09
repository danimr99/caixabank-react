import { useState } from "react";

/**
 * Custom hook to manage toggle state.
 *
 * @function
 * @param {boolean} initialState - Initial state of the toggle.
 * @returns {{
 * isOpened: boolean,
 * open: function(): void,
 * close: function(): void,
 * toggle: function(): void
 * }} Toggle object.
 */
export const useToggle = (initialState) => {
  const [isOpened, setIsOpened] = useState(initialState ?? false);

  const toggle = () => {
    setIsOpened((previousState) => !previousState);
  };

  const open = () => {
    setIsOpened(true);
  };

  const close = () => {
    setIsOpened(false);
  };

  return { isOpened, open, close, toggle };
};
