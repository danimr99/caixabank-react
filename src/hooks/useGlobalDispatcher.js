/** @import {Dispatch, UnknownAction} from "react-redux" */

import { useDispatch } from "react-redux";

/**
 * Custom hook to get the global dispatcher.
 *
 * @function
 * @returns {{dispatch: Dispatch<UnknownAction>}} Global dispatcher.
 */
export const useGlobalDispatcher = () => {
  const dispatch = useDispatch();

  return { dispatch };
};
