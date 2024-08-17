import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  MenuOutlined,
} from "@mui/icons-material";

import { Logos, NavigationBarLinks } from "../../constants";
import { useToggle } from "../../hooks";
import {
  CustomAppBar,
  CustomDrawer,
  CustomDrawerHeader,
  NavigationBarItem,
} from "./ui";
import { Logo, ThemeSwitch } from "../";

export const NavigationBar = () => {
  const theme = useTheme();
  const {
    isOpened: isSideMenuExpanded,
    open: expandSideMenu,
    close: shrinkSideMenu,
  } = useToggle(false);

  return (
    <>
      <CustomAppBar position="fixed" open={isSideMenuExpanded}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={expandSideMenu}
            edge="start"
            sx={{
              marginRight: 5,
              ...(isSideMenuExpanded && { display: "none" }),
              ...(!isSideMenuExpanded && {
                display: { xs: "none", md: "block" },
              }),
            }}
          >
            <MenuOutlined />
          </IconButton>

          <Grid container direction="row" alignItems="center">
            <Logo variant={Logos.CAIXABANK_VARIANT} />

            <Typography
              variant="h6"
              noWrap
              component="div"
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
      </CustomAppBar>
      <CustomDrawer variant="permanent" open={isSideMenuExpanded}>
        <CustomDrawerHeader>
          <IconButton onClick={shrinkSideMenu}>
            {theme.direction === "rtl" ? (
              <ChevronRightOutlined />
            ) : (
              <ChevronLeftOutlined />
            )}
          </IconButton>
        </CustomDrawerHeader>
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
      </CustomDrawer>
    </>
  );
};
