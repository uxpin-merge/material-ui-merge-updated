import React from "react";
import PropTypes from "prop-types";
import ListItemIconM from "@material-ui/core/ListItemIcon";
import Icon from "../icon/Icon"

function ListItemIcon(props) {
  return <ListItemIconM {...props}><Icon>{props.children}</Icon></ListItemIconM>;
}

ListItemIcon.propTypes = {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@material-ui/icons` SVG icon element.
   * @uxpinpropname  Icon
   * @uxpindescription  The icon to display.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * @ignore
   * @uxpinignoreprop
   */
  className: PropTypes.string
};

export { ListItemIcon as default };
