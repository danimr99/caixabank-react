/** @import {Errors, Error} from "../docs" */

import { addError, clearError, Stores } from "../store";
import { generateUUID } from "../utils";
import { useGlobalDispatcher } from "./useGlobalDispatcher";
import { useGlobalState } from "./useGlobalState";

/**
 * Custom hook to manage errors.
 *
 * @function
 * @returns {{
 * errors: Errors,
 * throwError: function(string):string,
 * clearErrorById: function(string):void,
 * getErrorById: function(string):Error
 * }} The errors registry and error management functions.
 */
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
