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
import { LogoNames } from "../Logo";
import { NavigationBarLinks } from "./links";
import { useNavigation, useToggle } from "../../hooks";
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
import { Logo } from "../Logo";
import { Icon } from "../Icon";
import { ThemeSwitch } from "../Switches";

export const NavigationBar = () => {
  const { navigateTo } = useNavigation();
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
          <NavigationBarMenuButton
            isSideMenuExpanded={isSideMenuExpanded}
            expandSideMenu={expandSideMenu}
          />

          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Logo
                name={
                  theme === Themes.LIGHT
                    ? LogoNames.CAIXABANK_ALT
                    : LogoNames.CAIXABANK
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
    </>
  );
};
