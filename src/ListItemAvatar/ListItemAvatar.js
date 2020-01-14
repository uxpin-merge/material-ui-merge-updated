import ListItemAvatarM from "@material-ui/core/ListItemAvatar";
import PropTypes from "prop-types";
import React from "react";
import Avatar from "../Avatar/Avatar";

function ListItemAvatar(props) {
  return (
    <ListItemAvatarM {...props}>
      <Avatar icon={props.icon} src={props.src} children={props.children} />
    </ListItemAvatarM>
  );
}

ListItemAvatar.propTypes = {
  /**
   * Letters for initial icons
   */
  /** @uxpinpropname  Letters */
  children: PropTypes.string,

  /**
   * The name of the icon from https://material.io/resources/icons.
   */
  icon: PropTypes.string,

  /**
   * The image URL source.
   */
  /** @uxpinpropname  ImageURL */
  src: PropTypes.string,
  /**
   * PROPS BELOW NOT USED
   */

  /**
   * The content of the component – normally `Avatar`.
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
  className: PropTypes.string
};

export { ListItemAvatar as default };
