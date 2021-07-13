import DrawerM from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  scrollPaper: {
    alignItems: "flex-start"
  },
  root: {
    display: "flex"
  },
  drawerPaperSide: {
    minWidth: "256px",
    // flexShrink: 0
  },
  drawerPaperBottom: {
    width: "100%",
    flexShrink: 0
  }
}));

export default function Drawer(props) {
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

  const drawerWidth =
    props.anchor === "bottom" || props.anchor === "top"
      ? classes.drawerPaperBottom
      : classes.drawerPaperSide;

  return (
    <DrawerM
      // TransitionProps={uxpContainer ? { tabIndex: "null" } : null}
      classes={{
        scrollPaper: classes.scrollPaper
      }}
      open={open}
      onClose={handleClose}
      container={drawerContainer}
      disableEnforceFocus
      keepMounted
      disablePortal={false}
      {...props}
    >
      <div style={{ minWidth: props.width }}>
        {props.children}
      </div>
    </DrawerM>

  )
}




Drawer.propTypes = {
  /**
  * if `true` shows the drawer.
  */
  open: PropTypes.bool,

  /**
   * The variant to use.
   * 
   */
  variant: PropTypes.oneOf(["temporary"]),
  // variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),


  /**
   * Side from which the drawer will appear.
   */
  anchor: PropTypes.oneOf(["left", "top", "right", "bottom"]),

  /**
   * The width of the drawer.
   */
  width: PropTypes.number,

  /**
   * Close event to use with UXPin interactions.
   */
  onClose: PropTypes.func,


  /**
  * The contents of the drawer.
  * @uxpinignoreprop
  */
  children: PropTypes.node,

  /**
   * Needed to display in UXP editor if variant is `permanent` or `persistent`
  //  * @uxpinignoreprop
   */
  // minHeight: PropTypes.number,
};


// Drawer.defaultProps = {
// open: false,
// onClose: () => undefined,
// maxWidth: false
// };
