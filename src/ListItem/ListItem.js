import React from "react";
import PropTypes from "prop-types";
import ListItemM from "@material-ui/core/ListItem";
import ListItemIcon from "../ListItemIcon/ListItemIcon";
import ListItemText from "../ListItemText/ListItemText";
import ListItemSecondaryAction from "../ListItemSecondaryAction/ListItemSecondaryAction";
import Divider from "../DividerUXP/DividerUXP";

function ListItem(props) {
  return (
    <>
      <ListItemM {...props}>
        {props.icon ? <ListItemIcon>{props.icon}</ListItemIcon> : null}
        <ListItemText
          primary={props.primary}
          secondary={props.secondary}
          inset={props.inset}
        />
        {props.children ? (
          <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
        ) : null}
      </ListItemM>
      {props.hasDivider ? <Divider marginTop={1} marginBottom={1} /> : null}
    </>
  );
}

ListItem.propTypes = {
  /**
   * The main text.
   * @uxpinpropname  Primary Text
   */
  primary: PropTypes.string,

  /**
   * The secondary text.
   * @uxpinpropname  Secondary Text
   */
  secondary: PropTypes.string,

  /**
   * if set, Icon will display.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  icon: PropTypes.string,

  /**
   * If `true`, the list item will be clickable.
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
   * If `true`, a border is added to the bottom of the list item.
   */
  hasDivider: PropTypes.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * If `true`, text will be indented.
   * This should be used on an item without icon when siblings have icon.
   */
  inset: PropTypes.bool,

  /**
   * Click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,


  /**
   * PROPS BELOW NOT USED
   */
  
   /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @uxpinignoreprop
   */
  divider: PropTypes.bool,

  /**
   * Defines the `align-items` style property.
   * @uxpinignoreprop
   */
  alignItems: PropTypes.oneOf(["flex-start", "center"]),

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
