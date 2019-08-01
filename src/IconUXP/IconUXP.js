import IconM from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import React from "react";

function IconUXP(props) {
  return <IconM {...props}>{props.children}</IconM>;
}

// *********************
// ** Designer specific parameters exposed in UXPin. See MUI component documentation for additional parameters
// *********************

IconUXP.propTypes = {
  /**
   * The name of the icon from https://material.io/tools/icons.
   */
  children: PropTypes.node,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
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
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(["inherit", "default", "small", "large"])
};

export { IconUXP as default };
