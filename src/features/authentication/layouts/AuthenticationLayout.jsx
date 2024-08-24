import PropTypes from "prop-types";
import { Container, Grid, Stack, Typography } from "@mui/material";

import { NavigationLayout } from "../../../layouts";
import { Breakpoints, ImageAsset, AssetsNames, Spacing } from "../../../ui";

export const AuthenticationLayout = ({ children, title }) => {
  return (
    <NavigationLayout avoidNavigationOverlap={false}>
      <Container
        fixed
        maxWidth={Breakpoints.XS}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Grid container direction="column" justifyContent="center">
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            xs={12}
            sx={{
              marginBottom: Spacing.XL,
            }}
          >
            <Stack direction="column" alignItems="center">
              <ImageAsset name={AssetsNames.CAIXABANK} />
              <Typography variant="h5">{title}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </NavigationLayout>
  );
};

AuthenticationLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
