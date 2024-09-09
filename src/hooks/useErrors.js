import { addError, clearError, Stores } from "../store";
import { generateUUID } from "../utils";
import { useGlobalDispatcher } from "./useGlobalDispatcher";
import { useGlobalState } from "./useGlobalState";

export const useErrors = () => {
  const { errors } = useGlobalState(Stores.ERRORS);
  const { dispatch } = useGlobalDispatcher();

  const throwError = (message) => {
    const errorId = generateUUID();
    dispatch(addError({ id: errorId, message }));

    return errorId;
  };

  const clearErrorById = (errorId) => {
    dispatch(clearError({ id: errorId }));
  };

  const getErrorById = (errorId) => errors[errorId];

  return {
    errors,
    throwError,
    clearErrorById,
    getErrorById,
  };
};
