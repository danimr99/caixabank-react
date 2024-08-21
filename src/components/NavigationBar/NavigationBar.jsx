import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  Toolbar,
  useTheme as useMuiTheme,
} from "@mui/material";

import { Themes } from "../../constants";
import { useToggle } from "../../hooks";
import { useThemeContext } from "../../contexts";
import { NavigationBarLinks } from "./";
import { AppBar, Drawer, DrawerHeader, NavigationBarItem } from "./ui";
import {
  Logo,
  Logos,
  ThemeSwitch,
  NavigationBarMenuButton,
  Icon,
  Icons,
  NavigationBarTitle,
} from "../";

export const NavigationBar = () => {
  const muiTheme = useMuiTheme();
  const { theme } = useThemeContext();
  const {
    isOpened: isSideMenuExpanded,
    open: expandSideMenu,
    close: shrinkSideMenu,
  } = useToggle(false);

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
                  theme === Themes.LIGHT ? Logos.CAIXABANK_ALT : Logos.CAIXABANK
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
        <List>
          {NavigationBarLinks.map((navigationBarLink) => (
            <NavigationBarItem
              key={navigationBarLink?.label}
              {...navigationBarLink}
              isSideMenuExpanded={isSideMenuExpanded}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};
