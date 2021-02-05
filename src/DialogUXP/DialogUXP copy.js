import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  scrollPaper: {
    alignItems: "flex-start"
  }
});

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
    let drawerContainer = null;
    const { classes } = this.props;

    if (document.querySelector("#iframeContainer iframe")) {
      drawerContainer = document.querySelector("#iframeContainer iframe").contentWindow.document.body;
    } else if (document.querySelector("[data-id='canvas']")) {
      drawerContainer = document.querySelector("[data-id='canvas']");
    }
    return (
      
        <Dialog      
          TransitionProps={uxpContainer ? { tabIndex: "null" } : null}
          classes={{
            scrollPaper: classes.scrollPaper
          }}
          open={this.state.open}
          onClose={this.handleClose}
          container={drawerContainer}
          disableEnforceFocus
          keepMounted      
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
   * @uxpinignoreprop
   */
  height: PropTypes.number,

  /**
   * If `true`, the dialog will be full-screen
   * @uxpinignoreprop
   */
  fullScreen: PropTypes.bool,

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   * @uxpinignoreprop
   */
  disableBackdropClick: PropTypes.bool,

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   * @uxpinignoreprop
   */
  fullWidth: PropTypes.bool,

  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   * @uxpinignoreprop
   */
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]),

  /**
   * Enter event to use with UXPin interactions.
   */
  onEnter: PropTypes.func,

  /**
   * Exit event to use with UXPin interactions.
   */
  onExit: PropTypes.func,

  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node
};

export default withStyles(styles)(DialogUXP);

