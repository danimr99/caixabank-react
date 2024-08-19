import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  Toolbar,
  Typography,
  useTheme as useMuiTheme,
} from "@mui/material";

import { useToggle } from "../../hooks";
import { NavigationBarLinks } from "./";
import {
  Logo,
  Logos,
  ThemeSwitch,
  NavigationBarMenuButton,
  Icon,
  Icons,
} from "../";
import { AppBar, Drawer, DrawerHeader, NavigationBarItem } from "./ui";
import { Themes } from "../../constants";
import { useThemeContext } from "../../contexts";

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
            <Logo
              name={
                theme === Themes.LIGHT ? Logos.CAIXABANK_ALT : Logos.CAIXABANK
              }
            />

            <Typography
              variant="h6"
              component="div"
              noWrap
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              CaixaBankNow
            </Typography>
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
              key={navigationBarLink.label}
              {...navigationBarLink}
              isSideMenuExpanded={isSideMenuExpanded}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};
