import ButtonM from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    marginLeft: -theme.spacing.unit / 2,
    fontSize: 18
  }
});

function ButtonUXP(props) {
  let { classes } = props;
  return (
    <ButtonM {...props} className={ (props.hasMargin ? null : null )}>
      {props.icon ? (
        <Icon className={classes.leftIcon}>{props.icon}</Icon>
      ) : null}
      {props.children}
    </ButtonM>
  );
}

// *********************
// ** Designer specific parameters exposed in UXPin. See MUI component documentation for additional parameters
// *********************

ButtonUXP.propTypes = {
  /**
   * The label or content of the button.
   */
  children: PropTypes.node,

  /**
   * The type of button.
   */
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),

  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(["primary", "secondary", "inherit"]),

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * If set, icon will display.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  icon: PropTypes.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * Applies margins to the button
   */
  // hasMargin: PropTypes.bool,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  onClick: PropTypes.func
};

export default withStyles(styles)(ButtonUXP);