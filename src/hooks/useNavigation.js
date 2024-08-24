import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path, options = { replace: false }) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { navigateTo, goBack };
};
