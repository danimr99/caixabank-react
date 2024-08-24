import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path, { replace = false }) => {
    navigate(path, { replace });
  };

  const goBack = () => {
    navigate(-1);
  };

  return { navigateTo, goBack };
};
