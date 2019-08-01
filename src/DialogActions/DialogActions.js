import DialogActionsM from "@material-ui/core/DialogActions";
import PropTypes from "prop-types";
import React from "react";

function DialogActions(props) {
  return <DialogActionsM {...props}>{props.children}</DialogActionsM>;
}

DialogActions.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * If true, the dialog actions do not have additional margin.
   */
  disableActionSpacing: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes: PropTypes.object,

};

export { DialogActions as default };
