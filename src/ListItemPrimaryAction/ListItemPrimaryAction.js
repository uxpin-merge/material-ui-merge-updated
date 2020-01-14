import React from "react";
import PropTypes from "prop-types";
import ListItemIconM from "@material-ui/core/ListItemIcon";

function ListItemPrimaryAction(props) {
  return <ListItemIconM {...props}>{props.children}</ListItemIconM>;
}

ListItemPrimaryAction.propTypes = {
  /**
   * The action component. Normally an `IconButton` or selection control.
   */
  children: PropTypes.node
};

export { ListItemPrimaryAction as default };
