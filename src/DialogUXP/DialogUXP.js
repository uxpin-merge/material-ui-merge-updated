import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  scrollPaper: {
        alignItems: "flex-start"
      }
}));

  export default function DialogUXP(props){
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(props.open);

    React.useEffect(() => setOpen(props.open), [props]);

    const handleClose = () => {
      setOpen(false);
    };

    

    const uxpContainer = document.querySelector("[data-id='canvas']");
    let drawerContainer = null;

    if (document.querySelector("#iframeContainer iframe")) {
      drawerContainer = document.querySelector("#iframeContainer iframe").contentWindow.document.body;
    } else if (document.querySelector("[data-id='canvas']")) {
      drawerContainer = document.querySelector("[data-id='canvas']");
    }

  return(
    <Dialog      
    TransitionProps={uxpContainer ? { tabIndex: "null" } : null}
    classes={{
      scrollPaper: classes.scrollPaper
    }}
    open={open}
    onClose={handleClose} 
    container={drawerContainer}
    disableEnforceFocus
    keepMounted
    disablePortal={true}
    {...props}
  >
    {props.children}
  </Dialog>

  )
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
   */
  fullScreen: PropTypes.bool,

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   * @uxpinignoreprop
   */
  disableBackdropClick: PropTypes.bool,



  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
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
  children: PropTypes.node,

  onClose: PropTypes.func,

    /**
   * If `true`, the dialog stretches to `maxWidth`.
   * @uxpinignoreprop
   */
  fullWidth: PropTypes.bool,
};


DialogUXP.defaultProps = {
open: false,
onClose: () => undefined,
maxWidth: false
};
