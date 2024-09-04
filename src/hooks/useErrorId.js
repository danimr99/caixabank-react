import { useState } from "react";

import { useErrors } from "./useErrors";

export const useErrorId = () => {
  const [errorId, setErrorId] = useState(null);
  const { clearErrorById } = useErrors();

  const resetErrorId = () => {
    if (errorId) {
      clearErrorById(errorId);
      setErrorId(null);
    }
  };

  return {
    errorId,
    setErrorId,
    resetErrorId,
  };
};
