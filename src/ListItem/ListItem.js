import React from "react";
import PropTypes from "prop-types";
import ListItemM from "@material-ui/core/ListItem";

function ListItem(props) {
  return <ListItemM {...props}>{props.children}</ListItemM>;
}

ListItem.propTypes = {

  /**
   * If `true`, the list item will be a button (using `ButtonBase`).
   */
  button: PropTypes.bool,

  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool,

  /**
   * If `true`, the list item will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: PropTypes.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,
  
  /**
   * Defines the `align-items` style property.
   */
  alignItems: PropTypes.oneOf(["flex-start", "center"]),

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * PROPS BELOW NOT USED
   */

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   *  @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * @ignore
   *  @uxpinignoreprop
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   *  @uxpinignoreprop
   */
  component: PropTypes.string,

  /**
   * The container component used when a `ListItemSecondaryAction` is rendered.
   *  @uxpinignoreprop
   */
  ContainerComponent: PropTypes.node,

  /**
   * Properties applied to the container element when the component
   * is used to display a `ListItemSecondaryAction`.
   *  @uxpinignoreprop
   */
  ContainerProps: PropTypes.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   *  @uxpinignoreprop
   */
  dense: PropTypes.bool,

  /**
   * @ignore
   *  @uxpinignoreprop
   */
  focusVisibleClassName: PropTypes.string
};

export { ListItem as default };
