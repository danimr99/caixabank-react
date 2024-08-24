import PropTypes from "prop-types";
import { Box, Toolbar } from "@mui/material";

import { NavigationBar } from "../ui";

export const NavigationLayout = ({ children }) => (
  <Box sx={{ display: "flex" }}>
    <NavigationBar />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
      }}
    >
      <Toolbar />
      {children}
    </Box>
  </Box>
);

NavigationLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
