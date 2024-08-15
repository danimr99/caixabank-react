import { useState } from "react";

export const useToggle = (initialValue) => {
  const [isOpened, setIsOpened] = useState(initialValue);

  const toggle = () => {
    setIsOpened((previousState) => !previousState);
  };

  return { isOpened, toggle };
};
