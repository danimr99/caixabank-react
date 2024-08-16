import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path, { replace: true });
  };

  return { navigateTo };
};
