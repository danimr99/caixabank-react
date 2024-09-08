import PropTypes from "prop-types";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { useNotificationsContext } from "../../../contexts";
import { NavigationLayout } from "../../../layouts";
import {
  FabButton,
  GoBackButton,
  Icons,
  OptionsMenu,
  OptionsMenuButton,
  Spacing,
  useOptionsMenu,
} from "../../../ui";

export const PageLayout = ({
  title,
  children,
  showGoBackButton = false,
  showPageActions = false,
  actions = [],
  showFabButton = false,
  fab,
}) => {
  const { isNotificationVisible } = useNotificationsContext();
  const { anchorRef, isMenuOpened, handleOpenMenu, handleCloseMenu } =
    useOptionsMenu();

  return (
    <>
      <NavigationLayout>
        <Container fixed>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              minHeight: Spacing["3XL"],
            }}
          >
            <Box display="flex">
              {showGoBackButton && <GoBackButton />}
              {title && (
                <Typography variant="h4" fontWeight="600" component="h1">
                  {title}
                </Typography>
              )}
            </Box>

            {showPageActions && (
              <>
                <OptionsMenuButton onClick={handleOpenMenu} />
                <OptionsMenu
                  anchor={anchorRef?.current}
                  isOpened={isMenuOpened}
                  options={actions}
                  onClose={handleCloseMenu}
                />
              </>
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
  showPageActions: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      sx: PropTypes.object,
    })
  ),
  showFabButton: PropTypes.bool,
  fab: PropTypes.shape({
    icon: PropTypes.oneOf(Object.values(Icons)).isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};
