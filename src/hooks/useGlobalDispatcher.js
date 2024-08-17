import { useDispatch } from "react-redux";

export const useGlobalDispatcher = () => {
  const dispatch = useDispatch();

  return { dispatch };
};
