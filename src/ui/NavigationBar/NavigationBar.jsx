import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  Stack,
  Toolbar,
} from "@mui/material";

import { Themes } from "../../theme";
import { Icons } from "../Icon";
import { AssetsNames } from "../ImageAsset";
import { NavigationBarLinks } from "./links";
import { useAuthentication, useNavigation, useToggle } from "../../hooks";
import { useThemeContext } from "../../contexts";
import {
  AppBar,
  Drawer,
  DrawerHeader,
  NavigationBarItem,
  NavigationBarMenuButton,
  NavigationBarTitle,
  NavigationBarUser,
} from "./components";
import { ImageAsset } from "../ImageAsset";
import { Icon } from "../Icon";
import { ThemeSwitch } from "../Switches";

export const NavigationBar = () => {
  const { navigateTo } = useNavigation();
  const { isUserAuthenticated } = useAuthentication();
  const { theme, getThemeConfig } = useThemeContext();
  const muiTheme = getThemeConfig();
  const {
    isOpened: isSideMenuExpanded,
    open: expandSideMenu,
    close: shrinkSideMenu,
  } = useToggle();

  const handleNavigationItemClick = (path) => navigateTo(path);

  return (
    <>
      <AppBar position="fixed" open={isSideMenuExpanded}>
        <Toolbar>
          {isUserAuthenticated && (
            <NavigationBarMenuButton
              isSideMenuExpanded={isSideMenuExpanded}
              expandSideMenu={expandSideMenu}
            />
          )}

          <Grid container direction="row" alignItems="center">
            <Grid item>
              <ImageAsset
                name={
                  theme === Themes.LIGHT
                    ? AssetsNames.CAIXABANK_ALT
                    : AssetsNames.CAIXABANK
                }
              />
            </Grid>

            <Grid
              item
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <NavigationBarTitle text="CaixaBank" />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: {
                xs: isSideMenuExpanded ? "none" : "block",
                sm: "block",
              },
            }}
          >
            <ThemeSwitch />
          </Box>
        </Toolbar>
      </AppBar>

      {isUserAuthenticated && (
        <Drawer variant="permanent" open={isSideMenuExpanded}>
          <DrawerHeader>
            <IconButton onClick={shrinkSideMenu}>
              <Icon
                name={
                  muiTheme?.direction === "rtl"
                    ? Icons.NAVIGATION_BAR_MENU_HEADER_RIGHT
                    : Icons.NAVIGATION_BAR_MENU_HEADER_LEFT
                }
              />
            </IconButton>
          </DrawerHeader>

          <Divider />

          <Stack direction="column" flexGrow={1} justifyContent="space-between">
            <List>
              {NavigationBarLinks.map((navigationBarLink) => (
                <NavigationBarItem
                  key={navigationBarLink?.label}
                  {...navigationBarLink}
                  isSideMenuExpanded={isSideMenuExpanded}
                  onClick={() =>
                    handleNavigationItemClick(navigationBarLink?.path)
                  }
                />
              ))}
            </List>

            <NavigationBarUser isSideMenuExpanded={isSideMenuExpanded} />
          </Stack>
        </Drawer>
      )}
    </>
  );
};
