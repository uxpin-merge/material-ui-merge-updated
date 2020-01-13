import React from "react";
import PropTypes from "prop-types";
import IconM from "@material-ui/core/Icon";

function Icon(props) {
  return <IconM {...props}>{props.children}</IconM>;
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
   * @uxpinignoreprop
   */
  fontSize: PropTypes.oneOf(["inherit", "default", "small", "large"]),

  /**
   * The color of the icon.
   * @uxpinignoreprop
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
   * Override or extend the styles applied to the component.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,
  
  /** @uxpinignoreprop */
  className: PropTypes.string,
};

export { Icon as default };
