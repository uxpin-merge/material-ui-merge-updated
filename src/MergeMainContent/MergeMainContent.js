import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IglooSideNavigation from "../IglooSideNavigation/IglooSideNavigation";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import IglooHeader from "../IglooHeader/IglooHeader";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    borderLeft: "#eeeeee 1px solid",
    minHeight: "667px",
  },
  toolbar: theme.mixins.toolbar,
  toolbarMargin:{
    borderTop: "#ffffff 3px solid"
  },
  content: {
    flexGrow: 1,
    background: "#FAFBFC",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
}));

function MergeMainContent(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      
      <div className={classes.content}>
       

        {/* {props.hasSearch && (
          <Hidden smUp implementation="css">
            <div className={classes.toolbar} >1</div>
            <div className={classes.toolbar} >2</div>
          </Hidden>
        )} */}

        {props.children}
      </div>
    </div>
  );
}
MergeMainContent.propTypes = {
  children: PropTypes.node,
};

export default MergeMainContent;
