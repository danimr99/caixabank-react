import {
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
  Box,
  Grid,
  useTheme,
} from "@mui/material";
import {
  MenuOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
} from "@mui/icons-material";

import { NavigationBarLinks } from "../../constants";
import { useToggle } from "../../hooks";
import {
  CustomAppBar,
  CustomDrawer,
  CustomDrawerHeader,
  NavigationBarItem,
} from "./ui";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

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
            }}
          >
            <MenuOutlined />
          </IconButton>

          <Grid container direction="row" alignItems="center">
            <img
              width={64}
              height={48}
              src="assets/caixabank-icon.png"
              alt="CaixaBank logo"
            />

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
              key={navigationBarLink.text}
              {...navigationBarLink}
              isSideMenuExpanded={isSideMenuExpanded}
            />
          ))}
        </List>
      </CustomDrawer>
    </>
  );
};
