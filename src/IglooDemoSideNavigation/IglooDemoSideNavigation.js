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
        label: "Avatar",
        layoutId:"038f4b57fe984680349599d44fd3eb149449f931#",
        pageId: "122221601", 
      },
      {
        label: "Badge",
        layoutId:"317f9ab17bfb7e5510ea6c6dce0def1fd244ca52#",
        pageId: "122223204", 
      },
      {
        label: "Button",
        layoutId:"8c9bcf649cd5f0df18d4a69d9d7bfc9ce6d477ae#",
        pageId: "122177476",        
      },
      {
        label: "Icon",
        layoutId:"262d7341ef39647872c5c6ff0d44bb39643f9a6b#",
        pageId: "122225134",        
      },
      {
        label: "Paper",
        layoutId:"43e2ca5e5084dddeb22e0d59c1a888dbaa7633e7#",
        pageId: "122226364",        
      },
      {
        label: "Divider",
        layoutId:"cfd8a1902e686055df8062450695b1c28c7eca98#",
        pageId: "122233118",        
      },
      {
        label: "Typography",
        layoutId:"775102d75377d654c2ecdc69c6aad2833798d50d#",
        pageId: "122233578",        
      },
      {
        label: "Tooltip",
        layoutId:"5a3c4e7a2d7b07897d0565a3dcebb150ad459112#",
        pageId: "122252437",        
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
                    target="_parent"
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
