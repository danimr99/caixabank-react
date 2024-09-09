import { useSelector } from "react-redux";

/**
 * Custom hook to get the global state.
 *
 * @function
 * @param {string} store - The store name.
 * @returns {any} Global state.
 */
export const useGlobalState = (store) => {
  const globalState = useSelector((state) => state[store]);

  return { ...globalState };
};
