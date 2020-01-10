import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5)
  },
  nameContainer: {
    marginBottom: theme.spacing(2)
  }
}));

function ComponentDemoInspectorWrapper(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.nameContainer}>
        <Typography variant="h6" color="secondary">
          <strong>{props.title}</strong>
        </Typography>
        <Typography variant="overline" color="textSecondary">
          Component:
        </Typography>
        <Typography variant="overline" color="textPrimary">
          {props.componentName}
        </Typography>
      </div>
      <Paper elevation={1} square={true} className={classes.content}>
        {props.children}
      </Paper>
    </div>
  );
}
ComponentDemoInspectorWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  componentName: PropTypes.string
};
ComponentDemoInspectorWrapper.defaultProps = {
  title: "Variant Title",
  componentName: "ComponentName"
};

export { ComponentDemoInspectorWrapper as default };
