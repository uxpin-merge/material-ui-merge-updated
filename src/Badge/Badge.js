import React from "react";
import PropTypes from "prop-types";
import BadgeM from "@material-ui/core/Badge";

function Badge(props) {
  return <BadgeM {...props} >{props.children}</BadgeM>;
}

Badge.propTypes = {
  /**
   * The number to display in badge
   * @uxpinpropname  Count
   */
  badgeContent: PropTypes.node,

  /**
   * If `true`, the badge will be invisible.
   */
  invisible: PropTypes.bool,

  /**
  * The badge will be added relative to this node.
  */
  /** @uxpinignoreprop */
  children: PropTypes.node,


  /**
  * Override or extend the styles applied to the component.
  */
  /** @uxpinignoreprop */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  /** @uxpinignoreprop */
  color: PropTypes.oneOf(["default", "primary", "secondary", "error"]),

};

export { Badge as default };
