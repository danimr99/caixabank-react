import PropTypes from "prop-types";
import { Box, Toolbar } from "@mui/material";

import { NavigationBar } from "../components/NavigationBar/NavigationBar";

export const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavigationBar />

      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
