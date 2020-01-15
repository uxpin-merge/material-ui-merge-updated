import React from "react";
import PropTypes from "prop-types";
import ListM from "@material-ui/core/List";
import ListSubheader from "../ListSubheader/ListSubheader";

function List(props) {
  return (
    <ListM {...props}>
      <ListSubheader disableSticky>{props.subheadText}</ListSubheader>
      {props.children}
    </ListM>
  );
}

List.propTypes = {
  /**
   * The content of the list subhead.
   */
  subheadText: PropTypes.string,

  /**
   * The content of the subheader, normally `ListSubheader`.
   *  @uxpinignoreprop  Subhead Text
   */
  subheader: PropTypes.node,

  /**
   * If `true`, vertical padding will be removed from the list.
   *  @uxpinignoreprop
   */
  disablePadding: PropTypes.bool,

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * @uxpinignoreprop
   */

  component: PropTypes.string,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items. The property is available to descendant components as the
   * `dense` context.
   * @uxpinignoreprop
   */
  dense: PropTypes.bool,

  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node
};

export { List as default };
