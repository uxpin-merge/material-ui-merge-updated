import DialogContentTextM from "@material-ui/core/DialogContentText";
import PropTypes from "prop-types";
import React from "react";

function DialogContentText(props) {
  return <DialogContentTextM {...props}>{props.children}</DialogContentTextM>;
}

DialogContentText.propTypes = {
  /**
   * The Dialog Content Text
   */
  children: PropTypes.node,
};

export { DialogContentText as default };
