import { useLocation, useNavigate } from "react-router-dom";

/**
 * Custom hook to manage navigation.
 *
 * @function
 * @returns {{
 * navigateTo: function(string, {replace: boolean}): void,
 * goBack: function(): void,
 * navigateToExternal: function(string, {openInNewTab: boolean}): void
 * }} Navigation object.
 */
export const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = (path, options = { replace: false }) => {
    if (location?.pathname === path) return;
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
