import DialogUXP from "../DialogUXP/DialogUXP";
import PropTypes from "prop-types";
import React from "react";

function DialogSimple(props) {
  return <DialogUXP {...props}>{props.children}</DialogUXP>;
}


DialogSimple.propTypes = {
 
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool,

  /**
  * If `true`, the dialog will be full-screen
  */
  fullScreen: PropTypes.bool,

 /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: PropTypes.bool,

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: PropTypes.bool,

  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]),

  /**
   * Callback fired before the dialog enters.
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired before the dialog exits.
   */
  onExit: PropTypes.func,

  children: PropTypes.node
  
};

export { DialogSimple as default };
