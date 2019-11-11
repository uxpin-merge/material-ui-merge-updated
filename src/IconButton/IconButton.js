import React from "react";
import PropTypes from "prop-types";
import IconButtonM from "@material-ui/core/IconButton";

function IconButton(props) {
  console.log("env", process.env.NODE_ENV);
  return <IconButtonM {...props} aria-label={props.ariaLabel}>{props.children}</IconButtonM>;
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  /**
   * The icon element.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
  * Aria tag for accessibility
  */
 ariaLabel: PropTypes.string,
   /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   */
  edge: PropTypes.oneOf(['start', 'end', false]),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium'])

};

export { IconButton as default };

