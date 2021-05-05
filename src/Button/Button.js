import ButtonM from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(1 / 2),
  },
}));

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function Button(props) {
  const classes = useStyles(props);
  const { uxpinRef, ...other } = props;

  return (
    <div >
      <ButtonM
        {...other}
        ref={uxpinRef}
        className={classes.root}
        startIcon={props.startIcon && <Icon>{props.startIcon}</Icon>}
        endIcon={props.endIcon && <Icon>{props.endIcon}</Icon>}
      >
        {props.children}
      </ButtonM>
    </div>
  );
}

// *********************
// ** Designer specific parameters exposed in UXPin. See MUI component documentation for additional parameters
// *********************

Button.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname  Label
   * */
  children: PropTypes.string,

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
   * If set, icon will display to the left.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  startIcon: PropTypes.string,

  /**
   * If set, icon will display to the right.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  endIcon: PropTypes.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * If `true`, the button will have no elevation.
   */

  disableElevation: PropTypes.bool,

  /**
   * If `true`, the button will be disabled.
   */

  disabled: PropTypes.bool,
  /**
   * On click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * Aria-label text for accessibility.
   */
  "aria-label": PropTypes.string,
};

export default Button;
