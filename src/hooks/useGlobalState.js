import { useSelector } from "react-redux";

export const useGlobalState = (store) => {
  const globalState = useSelector((state) => state[store]);

  return { ...globalState };
};
