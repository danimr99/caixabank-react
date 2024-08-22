import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

export const RouterProvider = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

RouterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
