import ListItemAvatarM from "@material-ui/core/ListItemAvatar";
import PropTypes from "prop-types";
import React from "react";

function ListItemAvatar(props) {
  return <ListItemAvatarM {...props} />;
}

ListItemAvatar.propTypes = {
  /**
   * The content of the component – normally `Avatar`.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string
};

export { ListItemAvatar as default };
