import React from "react";
import PropTypes from "prop-types";
import PaperM from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2)
  },
  outlined: {
    border: `1px solid ${theme.palette.divider}`
  }
}));

function Paper(props) {
  const classes = useStyles();
  return (
    <PaperM
      {...props}
      className={`${classes.root} ${
        props.elevation == 0 ? (props.outlined ? classes.outlined : null) : null
      }`}
    >
      {props.children}
    </PaperM>
  );
}

Paper.propTypes = {
  /**
   * The content of the component. Text or nested components.
   */
  children: PropTypes.node,

  /**
   * The shadow depth of paper surface. Accepts values between 0 and 16.
   */
  elevation: PropTypes.number,

  /**
   * Applies border if {true} and elevation = '0'.
   */
  outlined: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * @uxpinignoreprop
   */
  component: PropTypes.node,

  /**
   * If `true`, rounded corners are disabled.
   * @uxpinignoreprop
   */
  square: PropTypes.bool,

  /**
   * Custom Style Object
   * @uxpinignoreprop
   */
  style: PropTypes.object
};

export { Paper as default };
