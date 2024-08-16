import { useDispatch, useSelector } from "react-redux";

export const useGlobalState = (store) => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state[store]);

  return {
    ...globalState,
    dispatch,
  };
};
