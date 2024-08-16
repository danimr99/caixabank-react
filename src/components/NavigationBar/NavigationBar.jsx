import {
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  useTheme,
} from "@mui/material";
import {
  MenuOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  InboxOutlined,
  MailOutlined,
} from "@mui/icons-material";

import { useToggle } from "../../hooks";
import { CustomAppBar, CustomDrawer, CustomDrawerHeader } from "./ui";
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
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isSideMenuExpanded ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isSideMenuExpanded ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: isSideMenuExpanded ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isSideMenuExpanded ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isSideMenuExpanded ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxOutlined /> : <MailOutlined />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: isSideMenuExpanded ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CustomDrawer>
    </>
  );
};
