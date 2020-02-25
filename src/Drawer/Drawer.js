import DrawerM from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
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
});

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.open };
  }

  toggleDrawer = () => () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;

    const drawerWidth =
      this.props.anchor === "bottom" || this.props.anchor === "top"
        ? classes.drawerPaperBottom
        : classes.drawerPaperSide;


    return (
      <DrawerM
        {...this.props}
        onClose={this.toggleDrawer()}
        open={this.state.open}
        classes={{
          paper: drawerWidth
        }}
        disableEnforceFocus
        disablePortal={true}
      >
        <div style={{minWidth: this.props.width}}>
        {this.props.children}
        </div>
      </DrawerM>
    );
  }
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
  variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),

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
   * @uxpinignoreprop
   */
  // minHeight: PropTypes.number,
};

export default withStyles(styles)(Drawer);
