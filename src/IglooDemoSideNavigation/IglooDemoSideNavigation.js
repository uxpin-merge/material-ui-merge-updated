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



const styles = theme => ({
  root: {
    // display: "flex"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class IglooDemoSideNavigation extends React.Component {
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
    const uxpPreviewLink = `https://preview.uxpin.com/${this.props.layoutId}/pages/`;
    const uxpPreviewOptions = "?mode=cvhidfm";
    const navItems = [
      {
        label: "Avatars",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Badges",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Box",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Buttons",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765",        
      },
      {
        label: "Cards",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Checkboxes",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Chips",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Dialogs",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Dividers",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Drawers",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Expansion Panels",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Hidden",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Paper",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Progress",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Radio Buttons",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Select",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Snackbars",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Switches",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Tables",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Tabs",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Text Fields",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Tooltips",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
      {
        label: "Typography",
        layoutId:"ec1a05430ba8dead2702ed9f36c37b92b769577c#",
        pageId: "122142765", 
      },
    ];
    return (
      <div className={classes.root}>
       




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
              <List component="div" disablePadding dense>
                {navItems.map((navItem, index) => (
                  <ListItem
                    button
                    component="a"
                    href={`https://preview.uxpin.com/${navItem.layoutId}/pages/${navItem.pageId}${uxpPreviewOptions}`}
                    // href={`${navItem.previewUrl}${navItem.pageId}${uxpPreviewOptions}`}
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

      
      </div>
    );
  }
}

IglooDemoSideNavigation.propTypes = {
  pageTitle: PropTypes.string,
  pageId: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(styles, { withTheme: true })(IglooDemoSideNavigation);
