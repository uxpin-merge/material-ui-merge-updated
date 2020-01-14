import React from "react";
import PropTypes from "prop-types";
import ListItemTextM from "@material-ui/core/ListItemText";

function ListItemText(props) {
  return <ListItemTextM {...props} />;
}

ListItemText.propTypes = {

  /**
   * The main copy.
   * @uxpinpropname  Primary Text
   */
  primary: PropTypes.node,

  /**
   * The secondary content element.
   * @uxpinpropname  Secondary Text
   */
  secondary: PropTypes.node,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,

  /**
   * PROPS BELOW NOT USED
   */

  /**
   * Alias for the `primary` property.
   * @uxpinignoreprop
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
  className: PropTypes.string,

  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @uxpinignoreprop
   */
  disableTypography: PropTypes.bool,


  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   * @uxpinignoreprop
   */
  primaryTypographyProps: PropTypes.object,



  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   * @uxpinignoreprop
   */
  secondaryTypographyProps: PropTypes.object,

  /**
   * @ignore
   * @uxpinignoreprop
   */
  theme: PropTypes.object
};

export { ListItemText as default };
