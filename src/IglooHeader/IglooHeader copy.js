import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import IglooSideNavigation from "../IglooSideNavigation/IglooSideNavigation";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Icon from "@material-ui/core/Icon";
import Badge from "@material-ui/core/Badge";
import MenuUXP from "../MenuUXP/MenuUXP";
import SearchIcon from "@material-ui/icons/Search";
import Image from "../Image/Image";
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "667px"
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    borderTop: "3px solid",
    borderTopColor: theme.palette.decoration.main
  },
  menuButton: {
    // marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  iconSection: {
    display: "flex"
  },
  logo: {
    height: "56px",
    maxWidth: "175px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "36px",
      maxWidth: "100px"
    }
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#cccccc", 0.15),
    "&:hover": {
      backgroundColor: fade("#cccccc", 0.25)
    },
    marginLeft: 0,
    marginTop: theme.spacing(1),
    // marginTop: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(5),
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 5, 1, 2),
    fontSize: ".875em",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 300
      }
    }
  },
  branding: {
    width: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "175px"
    }
  }
}));
function IglooHeader(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function logo() {
    return (
      <div className={classes.logo}>
        <Image
          src={props.logoSrc}
          alt={classes.logoAlt}
          height="100%"
          width="auto"
          objectFit="scale-down"
        />
      </div>
    );
  }
  //Checks if drawers should open in iframe or uxpcanvas
  let drawerContainer = null;

  if (document.querySelector("#iframeContainer iframe")) {
    drawerContainer = document.querySelector("#iframeContainer iframe")
      .contentWindow.document.body;
  } else if (document.querySelector("[data-id='canvas']")) {
    drawerContainer = document.querySelector("[data-id='canvas']");
  }
  console.log("iglooHeaderProps: ", props);

  return (
    <>
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="inherit"
        elevation={2}
      >
        <Grid container alignItems="center"
        >
          <Grid item className={classes.branding} 
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              {logo()}
            </Toolbar>
          </Grid>
          <Grid
            item
            // style={{ border: "blue 1px solid" }}
            className={classes.grow}
          >
            <Toolbar variant="dense">
              <div className={classes.grow} />
              <div className={classes.iconSection}>
                <Hidden xsDown implementation="css">
                  <div className={classes.search}>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                  </div>
                </Hidden>

                <IconButton aria-label="show 4 new mails" color="primary">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="primary"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                {props.hasAccountIcon && (
                  <MenuUXP
                    trigger="icon"
                    label="My Account"
                    icon="account_circle"
                    menuItems={props.accountMenu}
                    color="primary"
                    open={true}
                  />
                )}
              </div>
            </Toolbar>
            {props.desktopNavigationVariant == "horizontal" && (
          <Hidden smDown implementation="css">
            <Toolbar variant="dense" disableGutters>
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                uxpId="1"
                defaultValue={1}
              >
                <Tab label="Active" fullWidth />
                <Tab label="Disabled" ullWidth />
                <Tab label="Active" fullWidth />
              </Tabs>
            </Toolbar>
          </Hidden>
        )}
          </Grid>
        </Grid>

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <Image
              src={props.logoSrc}
              alt={classes.logoAlt}
              height="100%"
              width="auto"
              objectFit="scale-down"
            />
          </div>         
          <div className={classes.grow} />
          <div className={classes.iconSection}>
            <Hidden xsDown implementation="css">
              <div className={classes.search}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              </div>
            </Hidden>

            <IconButton aria-label="show 4 new mails" color="primary">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="primary">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {props.hasAccountIcon && (
              <MenuUXP
                trigger="icon"
                label="My Account"
                icon="account_circle"
                menuItems={props.accountMenu}
                color="primary"
                open={true}
              />
            )}
          </div>
        </Toolbar>
        {props.desktopNavigationVariant == "horizontal" && (
          <Hidden smDown implementation="css">
            <Toolbar variant="dense">
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                uxpId="1"
                defaultValue={1}
              >
                <Tab label="Active" fullWidth />
                <Tab label="Disabled" ullWidth />
                <Tab label="Active" fullWidth />
              </Tabs>
            </Toolbar>
          </Hidden>
        )}
      </AppBar>
      <Hidden smUp implementation="css">
        <nav className={classes.drawer}>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            container={drawerContainer}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            <IglooSideNavigation {...props} />
          </Drawer>
        </nav>
      </Hidden>
      {props.desktopNavigationVariant == "vertical" && (
        <Hidden smDown implementation="css">
          <nav className={classes.drawer}>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.toolbar} />
              <IglooSideNavigation {...props} />
            </Drawer>
          </nav>
        </Hidden>
      )}
      ;
    </>
  );
}
IglooHeader.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({}))
    })
  ),
  hasAccountIcon: PropTypes.bool,
  accountMenu: PropTypes.array,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  /**
   * The type of navigation to render at desktop breakpoint
   * `horizontal` Tabbed header navigation
   * (only 1 level supported)
   * `vertical` Sidebar navigation
   */
  desktopNavigationVariant: PropTypes.oneOf(["horizontal", "vertical"])
};
IglooHeader.defaultProps = {
  hasAccountIcon: true,
  accountMenu: [
    { label: "Profile" },
    { label: "Favorites" },
    { label: "Marketing Lists" },
    { label: "All Orders", hasDivider: "true" },
    { label: "Logout", icon: "cancel" }
  ],
  logoSrc: "https://uc.uxpin.com/files/732773/730600/image-6d6f68.png",
  logoAlt: "IGLOO Design System",
  desktopNavigationVariant: "vertical",
  menus: [
    {
      label: "Marketing",
      children: [
        {
          label: "Branding",
          children: [
            {
              label: "Brochures"
            },
            {
              label: "Business Cards"
            },
            {
              label: "Logos"
            }
          ]
        },
        {
          label: "Variable Printing",
          children: [
            {
              label: "Igen"
            },
            {
              label: "1-to-1"
            }
          ]
        },
        {
          label: "Loyalty"
        },
        {
          label: "Social Media"
        }
      ]
    },
    { label: "Data Solutions", icon: "data_usage" },
    { label: "Technology", icon: "widgets" },
    { label: "from header", icon: "bookmark" }
  ]
};

export default IglooHeader;
