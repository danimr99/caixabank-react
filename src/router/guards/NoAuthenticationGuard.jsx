import PropTypes from "prop-types";

import { useAuthentication } from "../../hooks";
import { Navigate } from "react-router-dom";

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
