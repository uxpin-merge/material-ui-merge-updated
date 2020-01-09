import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "667px"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

function IglooDemoLayout(props) {
  const classes = useStyles(props);
  const { children, ...newProps } = props;

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}
IglooDemoLayout.propTypes = {
  children: PropTypes.node,

};
export default IglooDemoLayout;
