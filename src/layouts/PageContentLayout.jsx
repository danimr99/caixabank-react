import PropTypes from "prop-types";
import { Box } from "@mui/material";

export const PageContentLayout = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        marginTop: "2rem",
      }}
    >
      {children}
    </Box>
  );
};

PageContentLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
