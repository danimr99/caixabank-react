import { useState } from "react";

import { useErrors } from "./useErrors";

/**
 * Custom hook to manage an error id.
 *
 * @function
 * @returns {{errorId: string, setErrorId: function():void, resetErrorId: function():void}}
 */
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
