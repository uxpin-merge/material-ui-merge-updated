import React from "react";
import PropTypes from "prop-types";
import HiddenM from "@material-ui/core/Hidden";

function Hidden(props) {
  return <HiddenM {...props}>{props.children}</HiddenM>;
}

Hidden.propTypes = {
  /**
   * The name of the icon  font ligature.
   */
  children: PropTypes.node,
  
  /**
  * Hide only the given breakpoint.
  */
  
  only: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

  /**
   * If true, screens this size and down will be hidden.
   */
  lgDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: PropTypes.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  mdDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: PropTypes.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  smDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: PropTypes.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xlDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: PropTypes.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xsDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: PropTypes.bool

};

export { Hidden as default };
