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
import SearchIcon from '@material-ui/icons/Search';
import Image from '../Image/Image';
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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
    },
  },
  iconSection: {
    display: "flex",
    marginRight: -theme.spacing(2),
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.headerBadges.main,
      color: theme.palette.common.white,
      right: -3,
      top: 2,
      border: "1px solid #fff",  
    }
  },


  logo:{
    height: '36px',
    [theme.breakpoints.down("sm")]: {
      maxHeight: '36px',
      maxWidth: '100px',
    }
  },
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#cccccc", 0.15),
    '&:hover': {
      backgroundColor: fade("#cccccc", 0.25),
    },
    height: '40px',
    marginLeft: 0,
    // marginTop: theme.spacing(1)/2,
    marginRight: theme.spacing(4),
    // marginTop: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: 0,
      width: '100%',
      alignSelf: 'baseline',
    },
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    right:0,
    top:0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 5, 1, 2),
    fontSize: '.875em',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      height: '-webkit-fill-available',
    },
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 300,
      },
      
    },
  },

  


}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 2,
    border: "1px solid #fff",
    // padding: '0 ',
  },
}))(Badge)

function IglooHeader(props) {
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
        position="fixed"
        className={classes.appBar}
        color="inherit"
        elevation={2}
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

{props.hasSearch && 
          <Hidden xsDown implementation="css">
            <Box>
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
              </Box>      
            </Hidden>
}
          <div className={classes.iconSection}>
            
            {props.children && 
        <Box>
            {React.Children.map(props.children, child => (
                React.cloneElement(child, {})
            ))}
        </Box>
    }

             {/* <IconButton aria-label="show 4 new mails" color="primary">
            <StyledBadge badgeContent={3} max={9} color="secondary" >
                <MailIcon />
              </StyledBadge>
            </IconButton>
           <IconButton aria-label="show 17 new notifications" color="primary">
              <StyledBadge badgeContent={17} max={9} color="secondary" >
                <NotificationsIcon />
              </StyledBadge>
            </IconButton> */}
            {props.hasAccountIcon && (
              <MenuUXP
                trigger="icon"
                label="My Account"
                icon="account_circle"
                menuItems={props.accountMenu}
                color="primary"
                open={false}
              />
            )}
           
          </div>


        </Toolbar>
        {props.hasSearch && 
        <Hidden smUp implementation="css">
        <Toolbar variant="dense" disableGutters>
        
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
        </Toolbar>
        </Hidden>
        }
        {(props.desktopNavigationVariant=="horizontal") && (
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
            <IglooSideNavigation menus={props.menus} {...props}/>
          </Drawer>
          </nav>
        </Hidden>


        {(props.desktopNavigationVariant=="vertical") && (
          
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
        )};
      
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
   * (only 1 level currently supported)
   * `vertical` Sidebar navigation
   */
  desktopNavigationVariant: PropTypes.oneOf(['horizontal', 'vertical']),
  hasSearch: PropTypes.bool,
  children: PropTypes.node,
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
  desktopNavigationVariant:"vertical",
  menus: [
    {
      label: 'Marketing',
      children: [
        {
          label: 'Branding',
          children: [
            {
              label: 'Brochures',
            },
            {
              label: 'Business Cards',
            },
            {
              label: 'Logos',
            },
          ],
        },
        {
          label: 'Variable Printing',
          children: [
            {
              label: 'Igen',
            },
            {
              label: '1-to-1',
            },
          ],
        },
        {
          label: 'Loyalty',
        },
        {
          label: 'Social Media',
        },
      ],
    },
    { label: 'Data Solutions', icon: 'data_usage' },
    { label: 'Technology', icon: 'widgets' },
    { label: 'from header', icon: 'bookmark' },
  ],
  hasSearch: true,
}

export default IglooHeader;
