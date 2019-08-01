import DialogContentM from "@material-ui/core/DialogContent";
import PropTypes from "prop-types";
import React from "react";

function DialogContent(props) {
  return <DialogContentM {...props}>{props.children}</DialogContentM>;
}

DialogContent.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details..
   */
  // classes: PropTypes.object,
};

export { DialogContent as default };
