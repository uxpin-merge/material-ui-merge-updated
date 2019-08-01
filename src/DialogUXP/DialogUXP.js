import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import React from "react";

class DialogUXP extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.open };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const uxpContainer = document.querySelector("[data-id='canvas']");

    return (
      
        <Dialog
          fullScreen={this.props.fullScreen}
          TransitionProps={uxpContainer ? { tabIndex: "null" } : null}
          fullWidth={this.props.fullScreen}
          maxWidth={this.props.maxWidth}
          disableBackdropClick={this.props.disableBackdropClick}
          open={this.state.open}
          onClose={this.handleClose}
          container={uxpContainer ? uxpContainer : this.props.container}
        >
          {this.props.children}
        </Dialog>
      
    );
  }
}

DialogUXP.propTypes = {
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool.isRequired,

  /**
   * Height of the dialog. This should equal the height of UXP canvas
   */
  height: PropTypes.number,

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

export default DialogUXP;
