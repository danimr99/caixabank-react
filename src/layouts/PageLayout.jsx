import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import { NavigationLayout, PageContentLayout } from "./";

export const PageLayout = ({ title, children }) => {
  return (
    <NavigationLayout>
      <Typography variant="h4" fontWeight="600" component="h1">
        {title}
      </Typography>

      <PageContentLayout>{children}</PageContentLayout>
    </NavigationLayout>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
