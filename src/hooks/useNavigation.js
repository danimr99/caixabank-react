import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { navigateTo, goBack };
};
