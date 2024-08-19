import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";

import { NavigationLayout, Spacing } from "./";
import { GoBackButton } from "../components";

export const PageLayout = ({ title, children, showGoBackButton = false }) => {
  return (
    <NavigationLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: Spacing.MD,
        }}
      >
        <Grid
          container
          sx={{
            minHeight: Spacing.LG,
          }}
        >
          {showGoBackButton && (
            <Grid item>
              <GoBackButton />
            </Grid>
          )}
        </Grid>
        <Typography variant="h4" fontWeight="600" component="h1">
          {title}
        </Typography>
      </Box>

      <Grid container component="section" sx={{ marginTop: Spacing.LG }}>
        {children}
      </Grid>
    </NavigationLayout>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  showGoBackButton: PropTypes.bool,
};
