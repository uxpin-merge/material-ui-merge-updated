import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "667px"
  },
  content: {
    padding: theme.spacing(2)
  },
}));


function ComponentDemoInspector(props) {
  const classes = useStyles(props);

  return (
    <div>
      <div elevation={0}  className={classes.content}>
        
          {props.children}
      </div>
      <Divider/>
    </div>
  );
}
ComponentDemoInspector.propTypes = {
  /**
   * The content of the box.
   */
  children: PropTypes.node,
 
};

export { ComponentDemoInspector as default };
