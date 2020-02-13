import React from "react";
import PropTypes from "prop-types";
import IconM from "@material-ui/core/Icon";

function Icon(props) {
  return <IconM {...props} style={{color: props.colorHex}}>{props.children}</IconM>;
}

Icon.propTypes = {
  /**
  * The icon to display.
  * Use the name of the icon from https://material.io/tools/icons.
  * @uxpinpropname  Icon
  */
  children: PropTypes.node,

  /**
   * The icon size
   * @uxpinpropname  Size
   */
  fontSize: PropTypes.oneOf(["inherit", "default", "small", "large"]),

  /**
   * The color of the icon.
   */
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "action",
    "error",
    "disabled"
  ]),

  /**
   * Overrides color.
   */
  colorHex: PropTypes.string,
  
  /**
   * Override or extend the styles applied to the component.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,
  
  /** @uxpinignoreprop */
  className: PropTypes.string,
};

export { Icon as default };
