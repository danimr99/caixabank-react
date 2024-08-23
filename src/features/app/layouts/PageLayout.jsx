import PropTypes from "prop-types";
import { Container, Grid, Stack, Typography } from "@mui/material";

import { useNotificationsContext } from "../../../contexts";
import { NavigationLayout } from "../../../layouts";
import { FabButton, GoBackButton, Icons, Spacing } from "../../../ui";

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
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              minHeight: Spacing["3XL"],
            }}
          >
            {showGoBackButton && <GoBackButton />}
            {title && (
              <Typography variant="h4" fontWeight="600" component="h1">
                {title}
              </Typography>
            )}
          </Stack>

          <Grid
            container
            component="section"
            sx={{
              marginTop: Spacing.MD,
              marginBottom: Spacing.LG,
            }}
          >
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </NavigationLayout>

      {!isNotificationVisible && showFabButton && (
        <FabButton {...fab} expandable withAnimation />
      )}
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  showGoBackButton: PropTypes.bool,
  showFabButton: PropTypes.bool,
  fab: PropTypes.shape({
    icon: PropTypes.oneOf(Object.values(Icons)).isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};
