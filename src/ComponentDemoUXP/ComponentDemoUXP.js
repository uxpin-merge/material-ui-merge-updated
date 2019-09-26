import AppBar from "@material-ui/core/AppBar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Link from "@material-ui/icons/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    minHeight: "100px"
  },
  logo: {
    height: "43px",
    marginRight: "25px",
    marginBottom: "2px"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    minHeight: "800px"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class ComponentDemoUXP extends React.Component {
  state = {
    open: true,
    openlist: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleNestedList = () => {
    this.setState(state => ({ openlist: !state.openlist }));
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const uxpPreviewLink =
      "https://preview.uxpin.com/a2f9d05a1c84bf435e071793892ffa291d27d18f#/pages/";
    const uxpPreviewOptions = "?mode=cvhidfm";
    const navItems = [
      {
        label: "Typography",
        pageId: "111024058"
      },
      {
        label: "Avatars",
        pageId: "113231558"
      },
      {
        label: "App Bars",
        pageId: "110945767"
      },
      {
        label: "Backdrop",
        pageId: "111486035"
      },
      {
        label: "Badges",
        pageId: "113231555"
      },      {
        label: "Banner",
        pageId: "111155707"
      },
      {
        label: "Bottom Navigation",
        pageId: "110951907"
      },
      {
        label: "Buttons",
        pageId: "110582426"
      },
      {
        label: "Buttons: FAB",
        pageId: "110806303"
      },
      {
        label: "Cards",
        pageId: "110955235"
      },
      {
        label: "Chips",
        pageId: "110924901"
      },
      {
        label: "Data Tables",
        pageId: "111487067"
      },
      {
        label: "Dialog",
        pageId: "111245769"
      },
      {
        label: "Divider",
        pageId: "111320317"
      },
      {
        label: "Grid",
        pageId: "113231959"
      },
      {
        label: "Lists",
        pageId: "110997001"
      },
      {
        label: "Navigational Drawer",
        pageId: "111212661"
      },
      {
        label: "Menu",
        pageId: "111478479"
      },
      {
        label: "Paper",
        pageId: "113231957"
      },
      {
        label: "Progress Indicators",
        pageId: "111017118"
      },
      {
        label: "Selection Controls",
        pageId: "111009917"
      },
      {
        label: "Tabs",
        pageId: "111136735"
      },
      {
        label: "Text Fields",
        pageId: "111013038"
      },
      {
        label: "Tooltips",
        pageId: "111153670"
      },
      {
        label: "Slider",
        pageId: "111469707"
      },
      {
        label: "Snackbar",
        pageId: "111158502"
      }
    ];
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {this.props.pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-end"
            >
              <Grid item>
                <img
                  src="https://uc.uxpin.com/files/732773/730600/iglooLogo-5d5a1b.png"
                  className={classes.logo}
                />
              </Grid>
              <Grid item>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              component="a"
              href={`${uxpPreviewLink}113011865${uxpPreviewOptions}`}
              key="componentStatus"
              selected={this.props.pageId === "113011865" ? true : false}
            >
              <ListItemText primary="Component Status" />
            </ListItem>

            <ListItem button onClick={this.handleNestedList}>
              <ListItemText primary="Components" />
              {this.state.openlist ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openlist} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {navItems.map((navItem, index) => (
                  <ListItem
                    button
                    component="a"
                    href={`${uxpPreviewLink}${
                      navItem.pageId
                    }${uxpPreviewOptions}`}
                    key={index}
                    selected={this.props.pageId === navItem.pageId}
                    onClick={event => this.handleListItemClick(event, index)}
                    className={classes.nested}
                  >
                    <ListItemText primary={navItem.label} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

ComponentDemoUXP.propTypes = {
  pageTitle: PropTypes.string,
  pageId: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(styles, { withTheme: true })(ComponentDemoUXP);
