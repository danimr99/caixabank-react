import { useState } from "react";

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
