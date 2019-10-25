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
import IglooHeader from "../IglooHeader/IglooHeader";
import Backdrop from "@material-ui/core/Backdrop";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing * 3
  }
});

class IglooSimpleLayout extends React.Component {


  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Backdrop open={false} />
        <IglooHeader {...this.props}/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
         text here
          
        </main>
      </div>
    );
  }
}

IglooSimpleLayout.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(styles, { withTheme: true })(IglooSimpleLayout);
