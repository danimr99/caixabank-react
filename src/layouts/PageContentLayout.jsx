import PropTypes from "prop-types";
import { Box } from "@mui/material";

import { Spacing } from "./layouts";

export const PageContentLayout = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        marginTop: Spacing.LG,
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
