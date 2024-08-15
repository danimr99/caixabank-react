import { useState } from "react";

export const useToggle = (initialValue) => {
  const [isOpened, setIsOpened] = useState(initialValue);

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
