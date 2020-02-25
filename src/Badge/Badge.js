import React from "react";
import PropTypes from "prop-types";
import BadgeM from "@material-ui/core/Badge";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  customBadge: {
    flexGrow: 1,
    backgroundColor: theme.palette.headerBadges.main
  }
}));

function Badge(props) {
  const classes = useStyles();
  const theme = useTheme();

  return <BadgeM {...props} classes={{ badge: classes.customBadge }} >{props.children}</BadgeM>;
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
