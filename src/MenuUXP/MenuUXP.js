import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";

class MenuUXP extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { anchorEl: null };
  // }
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    let randomID = "menu-container-" + Math.floor(Math.random() * 100000);
    //Checks if drawers should open in iframe or uxpcanvas
let drawerContainer = null;

if (document.querySelector("#iframeContainer iframe")) {
  drawerContainer = document.querySelector("#iframeContainer iframe")
    .contentWindow.document.body;
} else if (document.querySelector("[data-id='canvas']")) {
  drawerContainer = document.querySelector("[data-id='canvas']");
}

    return (
      <div>
        {this.props.trigger === "icon" ? (
          <IconButton
            aria-label={this.props.label}
            aria-owns={anchorEl ? randomID : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            color={this.props.color}
          >
            <Icon>{this.props.icon}</Icon>
          </IconButton>
        ) : (
          <Button
            aria-owns={anchorEl ? randomID : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            variant={this.props.buttonVariant}
            color={this.props.color}
          >
            {this.props.label}
          </Button>
        )}

        <Menu
          id={randomID}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          container={drawerContainer}
          // keepMounted={true}
          // disablePortal={true}
        >
          {this.props.menuItems.map((item, key) => {
            return (
              <MenuItem onClick={this.handleClose} divider={item.hasDivider} key={key}>
                {item.icon && (
                  <ListItemIcon>
                    <Icon>{item.icon}</Icon>
                  </ListItemIcon>
                )}
                <Typography variant="inherit" noWrap>
                  {item.label}
                </Typography>
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    );
  }
}

MenuUXP.propTypes = {
  /**
   * Menu items. Can have optional icons and dividers
   * Format:
   * [
    { label: "Profile"},
    { label: "Favorites"},
    { label: "Marketing Lists"},
    { label: "All Orders", hasDivider: "true"},
    { label: "Logout", icon:"cancel" }
  ]
  */
  menuItems: PropTypes.array,

  /*
   *The type of element to open the menu.
   */
  trigger: PropTypes.oneOf(["icon", "buton"]),

  /**
   * The name of the icon from https://material.io/tools/icons.
   */
  icon: PropTypes.string,

  /**
   * Label of button or aria-label of icon.
   */
  label: PropTypes.string,

  /**
   * The type of button.
   */
  buttonVariant: PropTypes.oneOf(["text", "outlined", "contained"]),

  /**
   * The color of the button or icon.
   */
  color: PropTypes.oneOf(["primary", "secondary", "inherit"]),

  children: PropTypes.node
};

MenuUXP.defaultProps = {
  trigger: "icon",
  label: "More Items",
  icon: "more_vert",
  menuItems: [
    { label: "Profile" },
    { label: "Favorites" },
    { label: "Marketing Lists" },
    { label: "All Orders", hasDivider: "true" },
    { label: "Logout", icon: "cancel" }
  ]
};

export default MenuUXP;
