import AppBar from "@material-ui/core/AppBar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "../DividerUXP/DividerUXP";
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
        label: "Checkbox",
        layoutId:"f81e326866ecf749612706b294eada2bcb481944#",
        pageId: "122320282",        
      },
      {
        label: "Collapse Panel",
        layoutId:"938db5ab78edc38ebffe4eb0eb5b6f1c53090dcf#",
        pageId: "122415700",        
      },
      {
        label: "Chip",
        layoutId:"d140a851249c6bb0c2fbd3ff0c5fa6c735fa55da#",
        pageId: "122356199", 
      },
      {
        label: "Device Viewer **",
        layoutId:"af6d95333b1b707c0f4cab87fe0798b89addf409#",
        pageId: "122468692",        
      },
      {
        label: "Data Table",
        layoutId:"8961a2c0517a0af1743d98be4410c444646b7aac#",
        pageId: "122434193",        
      },
      {
        label: "Dialog",
        layoutId:"cfa8b00ecfbad283d13de1729bfe9b2440bcf5fa#",
        pageId: "122450520",        
      },
      {
        label: "Divider",
        layoutId:"cfd8a1902e686055df8062450695b1c28c7eca98#",
        pageId: "122233118",        
      },
      {
        label: "Drawer",
        layoutId:"7333fc3af7b99962bb1fba88017d0e711b975806#",
        pageId: "122437824",        
      },
      {
        label: "Hidden",
        layoutId:"5c4c936b5d75bf36c90137b551a96cdff7109038#",
        pageId: "122461204",        
      },
      {
        label: "Grid",
        layoutId:"23d248f9b358eb1ea608b2876437431ba9a5f878#",
        pageId: "122448119",        
      },
      {
        label: "Header **",
        layoutId:"4ca080daba4dc4056d1a12fe35b239a62d3faa09#",
        pageId: "122416283",        
      },
      {
        label: "Icon",
        layoutId:"262d7341ef39647872c5c6ff0d44bb39643f9a6b#",
        pageId: "122225134",        
      },
      {
        label: "List",
        layoutId:"7bfff3533eba4d8a91d65747d91db8b2689094f9#",
        pageId: "122265320",        
      },
      {
        label: "Menu",
        layoutId:"18106956ee1058bb46ac6a1b501e9d94d8a978df#",
        pageId: "122418506",        
      },
      {
        label: "Paper",
        layoutId:"43e2ca5e5084dddeb22e0d59c1a888dbaa7633e7#",
        pageId: "122226364",        
      },
      {
        label: "Tabs",
        layoutId:"1716547c87b3ac2e58d05edf584b5c7434e08a5e#",
        pageId: "122391009",        
      },
      {
        label: "Text Field",
        layoutId:"de4fe9dff22b0b8b49cedf1e3260f6b297d5842e#",
        pageId: "122366097",        
      },
      {
        label: "Tooltip",
        layoutId:"5a3c4e7a2d7b07897d0565a3dcebb150ad459112#",
        pageId: "122252437",        
      },
      {
        label: "Radio Button",
        layoutId:"d72b9094706b9a28e1f41eef645c834530bc84d2#",
        pageId: "122350047",        
      },
      {
        label: "Side Navigation **",
        layoutId:"c06ae1b93923ba55051040b9a606a18ae8497fa7#",
        pageId: "122446808",        
      },
      {
        label: "Select",
        layoutId:"387ebf9bf89f5c50ed706cb0fd16cd0c8d435770#",
        pageId: "122433189",        
      },
      {
        label: "Style Box",
        layoutId:"cb8ad98485f8e8f87401aacb144514dc7e8708bd#",
        pageId: "122415872",        
      },
      {
        label: "Switch",
        layoutId:"582245b9ac698acd8fa331eff168693695648ee7#",
        pageId: "122349836",        
      },
      {
        label: "Typography",
        layoutId:"775102d75377d654c2ecdc69c6aad2833798d50d#",
        pageId: "122233578",        
      },

    ];
    return (
      <div className={classes.root}>
       




          <List>
            <ListItem
              button
              component="a"
              target="_parent"
              href="https://preview.uxpin.com/72c685350e0bef557db9a2e1b0d34c9edaf2379a#/pages/122479651?mode=cvhidfm"
              key="componentStatus"
              selected={this.props.pageId === "122479651" ? true : false}
            >
              <ListItemText primary="Component Status" />
            </ListItem>
        
            <ListItem
              button
              component="a"
              href={`${uxpPreviewLink}113011865${uxpPreviewOptions}`}
              key="componentStatus"
              selected={this.props.pageId === "113011865" ? true : false}
            >
              <ListItemText primary="Guide: Getting Started" />
            </ListItem>

        <ListItem
              button
              component="a"
              href="https://preview.uxpin.com/72c685350e0bef557db9a2e1b0d34c9edaf2379a#/pages/122479651?mode=cvhidfm"
              key="componentStatus"
              selected={this.props.pageId === "22222" ? true : false}
            >
              <ListItemText primary="Guide: Using Grids" />
            </ListItem>

            <ListItem
              button
              component="a"
              href={`${uxpPreviewLink}113011865${uxpPreviewOptions}`}
              key="componentStatus"
              selected={this.props.pageId === "113011865" ? true : false}
            >
              <ListItemText primary="Guide: Using Device Viewer" />
            </ListItem>
          
<Divider marginTop={1} marginBottom={1}/>
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
