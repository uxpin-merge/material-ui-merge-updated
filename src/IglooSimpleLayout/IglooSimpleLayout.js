
import React from "react";
import PropTypes from "prop-types";
import IglooHeader from "../IglooHeader/IglooHeader";

import { withStyles } from "@material-ui/core/styles";

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



function IglooSimpleLayout(props) {
  
  const { classes } = props;
  return (
    <div className={classes.root}>
      <IglooHeader {...props}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

IglooSimpleLayout.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node,
};

export default withStyles(styles, { withTheme: true })(IglooSimpleLayout);
