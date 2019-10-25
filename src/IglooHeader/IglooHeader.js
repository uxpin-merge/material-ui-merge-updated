
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import IglooSideNavigation from "../IglooSideNavigation/IglooSideNavigation"

import Backdrop from "@material-ui/core/Backdrop";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      zIndex: theme.zIndex.drawer + 1
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing * 3
  }
});

class IglooHeader extends React.Component {
  state = {
    mobileOpen: false,
    container: null
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
    let drawerContainer = null;
    console.log(this.props)
    
    //Checks if drawers should open in iframe or uxpcanvas
    if (this.props.inIframe) {
      drawerContainer = document.querySelector("#iframeContainer iframe").contentWindow.document.body;
    } else if (document.querySelector("[data-id='canvas']")) {
      drawerContainer = document.querySelector("[data-id='canvas']");
    }

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        {/* <Divider />
        <List>LIST1</List>
        <Divider />
        <List>LIST2</List> */}
        <IglooSideNavigation/>
      </div>
    );

    return (
      <div >

        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
           
              from iglooheader
            
          </Toolbar>
        </AppBar>
        <Hidden lgUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            container={drawerContainer}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

IglooHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default withStyles(styles, { withTheme: true })(IglooHeader);
