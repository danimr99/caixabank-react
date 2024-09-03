import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path, options = { replace: false }) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  const navigateToExternal = (url, options = { openInNewTab: false }) => {
    if (options.openInNewTab) {
      window.open(url, "_blank", "noreferrer");
    } else {
      window.location.href = url;
    }
  };

  return { navigateTo, goBack, navigateToExternal };
};
