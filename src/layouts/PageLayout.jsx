import PropTypes from "prop-types";
import { Container, Grid, Stack, Typography } from "@mui/material";

import { useNotificationsContext } from "../contexts";
import { NavigationLayout, Spacing } from "./";
import { FloatingActionButton, GoBackButton } from "../components";
import { Icons } from "../components/Icons";

export const PageLayout = ({
  title,
  children,
  showGoBackButton = false,
  showFabButton = false,
  fab,
}) => {
  const { isNotificationVisible } = useNotificationsContext();

  return (
    <>
      <NavigationLayout>
        <Container fixed>
          <Stack direction="column" spacing={1}>
            <Grid
              container
              sx={{
                minHeight: Spacing.LG,
              }}
            >
              <Grid item>{showGoBackButton && <GoBackButton />}</Grid>
            </Grid>
            <Typography variant="h4" fontWeight="600" component="h1">
              {title}
            </Typography>
          </Stack>

          <Grid container component="section" sx={{ marginTop: Spacing.LG }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </NavigationLayout>

      {!isNotificationVisible && showFabButton && (
        <FloatingActionButton {...fab} expandable withAnimation />
      )}
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  showGoBackButton: PropTypes.bool,
  showFabButton: PropTypes.bool,
  fab: PropTypes.shape({
    icon: PropTypes.oneOf(Object.values(Icons)),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};
