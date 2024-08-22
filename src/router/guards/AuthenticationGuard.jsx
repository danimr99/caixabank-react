import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { useAuthentication } from "../../hooks";

export const AuthenticationGuard = ({ children }) => {
  const { isUserAuthenticated } = useAuthentication();

  return isUserAuthenticated ? children : <Navigate to="/authentication" />;
};

AuthenticationGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
