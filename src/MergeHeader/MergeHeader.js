import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Menu from "../Menu/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Image from "../Image/Image";
import Box from "../Box/Box";
import MergeTopNavigation from "../MergeTopNavigation/MergeTopNavigation";

const drawerWidth = 275;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "667px",
    minWidth: "550px"
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    },
    "& .MuiDrawer-paper": {
      backgroundColor: "#ffffff"
    }
  },
  appBar: {
    background: "#000000",
    zIndex: theme.zIndex.drawer + 1,
    borderTop: "5px solid",
    borderTopColor: theme.palette.decoration.main,
    minWidth: "550px",
    "& .MuiIconButton-root": {
      color: "#ffffff"
    }
  },
  menuButton: {
    // marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
      color: "#ffffff"
    }
  },
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f9fafc"
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
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  iconSection: {
    display: "flex",
    marginRight: -theme.spacing(2),
    "& .MuiBadge-badge": {
      backgroundColor: theme.palette.headerBadges.main,
      color: "#ffffff",
      right: -3,
      top: 2,
      // border: "1px solid #fff"
    }
  },

  icons:{
    color:"#ffffff"
  },

  logo: {
    height: "32px",
    // marginLeft: "-24px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "32px",
      // maxWidth: "100px"
    }
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffffff3d",
    color:"#ffffff",
    // "&:hover": {
    //   backgroundColor: fade("#ffffff", 0.95)
    // },
    height: "40px",
    marginLeft: 0,
    // marginTop: theme.spacing(1)/2,
    marginRight: theme.spacing(4),
    // marginTop: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: 0,
      width: "100%",
      alignSelf: "baseline"
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
    width: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      height: "-webkit-fill-available"
    },
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 300
      }
    }
  }
}));
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function MergeHeader(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  //Checks if drawers should open in iframe or uxpcanvas
  let drawerContainer = null;

  if (document.querySelector("#iframeContainer iframe")) {
    drawerContainer = document.querySelector("#iframeContainer iframe")
      .contentWindow.document.body;
  } else if (document.querySelector("[data-id='canvas']")) {
    drawerContainer = document.querySelector("[data-id='canvas']");
  }

  return (
    <>
      <AppBar
        // {...(props.inline ? { position: "static" } : { position: "fixed" } )}
        position = "fixed"
        className={classes.appBar}
        color="inherit"
        elevation={2}
        ref={props.uxpinRef}
      >
        <Toolbar>
          <IconButton
            color="#ffffff"
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
              // objectFit="scale-down"
            />
          </div>
          <div className={classes.grow} />

          {props.hasSearch && (
            <Hidden xsDown implementation="css">
              <Box paddingRight={1}>
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search???"
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
              </Box>
            </Hidden>
          )}
          <div className={classes.iconSection}>
            {props.children && (
              <Box >
                {React.Children.map(props.children, child =>
                  React.cloneElement(child, {})
                )}
              </Box>
            )}
            {props.hasAccountIcon && (
              <Menu
                trigger="icon"
                label="My Account"
                icon="account_circle"
                menuItems={props.accountMenu}
                color="#ffffff"
                open={false}
                className={classes.icons}
                placement="bottom-end"
              />
            )}
          </div>
        </Toolbar>
        {props.hasSearch && (
          <Hidden smUp implementation="css">
            <Toolbar variant="dense" disableGutters>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search???"
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
            </Toolbar>
          </Hidden>
        )}

        {props.hasNavigation ? 
        props.desktopNavigationVariant == "horizontal" && (
          <Hidden smDown implementation="css">
            <Toolbar variant="dense" disableGutters>
              <MergeTopNavigation menus={props.menus} />
            </Toolbar>
          </Hidden>
        ) : null }
      </AppBar>

    </>
  );
}
MergeHeader.propTypes = {
  /**
   * the URL of the logo
   */
  logoSrc: PropTypes.string,
  
  /**
   * Alt text for the logo
   */
  logoAlt: PropTypes.string,

  /**
   * If `true` search box will display
   */
  hasSearch: PropTypes.bool,

  /**
  * If `true` account icon will display
  */
  hasAccountIcon: PropTypes.bool,
  
    /**
  * Account menu array if "Account Icon" = `true`
  */
  accountMenu: PropTypes.array,

  /**
  * If `true` will show navigation
   * @uxpinignoreprop
  */
  hasNavigation: PropTypes.bool,

  /**
  * Menu array if "Navigation" = `true`
   * @uxpinignoreprop
  */
  menus: PropTypes.array,
  
  /**
   * The type of navigation to render at desktop breakpoint. Horizontal currently only supports one level
    * @uxpinignoreprop
   */
  desktopNavigationVariant: PropTypes.oneOf(["horizontal", "vertical"]),
  
  /**
   * Changes the placement of the header
   * @uxpinignoreprop
   */
  inline: PropTypes.bool,
  
/**
 * @uxpinignoreprop
 */
  children: PropTypes.node
};


export default MergeHeader;
