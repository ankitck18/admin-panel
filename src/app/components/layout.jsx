"use client";
import * as React from "react";
import PropTypes from "prop-types";
import {
  styled,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, Menu, MenuItem, Avatar, Tooltip } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import AppsIcon from "@mui/icons-material/Apps";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter, usePathname } from "next/navigation";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout(props) {
  const { window } = props;
  const { children } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null); // Menu anchor
  const router = useRouter();
  const pathname = usePathname();

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "rgba(106, 17, 203, 0.9)",
          backgroundImage: "linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9))",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {/* User Menu */}
          <Tooltip title="Account">
            <IconButton onClick={handleMenuOpen} color="inherit">
              <Avatar alt="User" />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{ mt: "45px" }}
          >
            <MenuItem onClick={() => { router.push("/profile"); handleMenuClose(); }}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => { router.push("/settings"); handleMenuClose(); }}>
              Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => { console.log("Logout"); handleMenuClose(); }}>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Toolbar>
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="LendNext logo"
              className="-ml-2 mr-2"
            />
            <div className="text-2xl font-bold">LendNext</div>
          </Toolbar>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Dashboard", "Borrower", "Applications", "Loans"].map((text) => (
            <ListItem
              key={text}
              disablePadding
              className={pathname.startsWith("/" + text.toLowerCase()) ? "text-purple-700 bg-slate-100" : "text-slate-700"}
              onClick={() => {
                router.push("/" + text.toLowerCase());
              }}
            >
              <ListItemButton>
                <ListItemIcon
                  className={
                    pathname.startsWith("/" + text.toLowerCase())
                      ? "text-purple-700 bg-slate-100"
                      : "text-slate-700"
                  }
                >
                  {text === "Dashboard" ? (
                    <DashboardIcon />
                  ) : text === "Applications" ? (
                    <AppsIcon />
                  ) : text === "Loans" ? (
                    <AccountBalanceIcon />
                  ) : text === "Borrower" ? (
                    <PersonIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem
            disablePadding
            onClick={handleCollapse}
            className={pathname.startsWith("/configurations") ? "text-purple-700 bg-slate-100" : "text-slate-700"}
          >
            <ListItemButton>
              <ListItemIcon
                className={pathname.startsWith("/configurations") ? "text-purple-700 bg-slate-100" : "text-slate-700"}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Admin Settings" />
              {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={isCollapse} timeout="auto" unmountOnExit className="ml-4">
          <List>
            {["Scorecard", "Decision Engine", "Groups"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <AccountBalanceIcon /> : <AccountBoxIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
  children: PropTypes.array,
};
