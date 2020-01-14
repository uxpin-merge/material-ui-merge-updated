import React from "react";
import PropTypes from "prop-types";
import ListItemSecondaryActionM from "@material-ui/core/ListItemSecondaryAction";

function ListItemSecondaryAction(props) {
  return <ListItemSecondaryActionM {...props}>{props.children}</ListItemSecondaryActionM>;
}

ListItemSecondaryAction.propTypes = {
  /**
   * The action component. Normally an `IconButton` or selection control.
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

export { ListItemSecondaryAction as default };
