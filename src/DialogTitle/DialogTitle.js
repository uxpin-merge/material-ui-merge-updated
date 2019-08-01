import DialogTitleM from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import React from "react";

function DialogTitle(props) {
  return <DialogTitleM {...props}>{props.children}</DialogTitleM>;
}

DialogTitle.propTypes = {
  /**
   * The text of the Dialog Title.
   */
  children: PropTypes.node,
};

export { DialogTitle as default };
