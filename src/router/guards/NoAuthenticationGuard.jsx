import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { useAuthentication } from "../../hooks";

export const NoAuthenticationGuard = ({ children }) => {
  const { isUserAuthenticated } = useAuthentication();

  return isUserAuthenticated ? <Navigate to="/app" replace /> : children;
};

NoAuthenticationGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
