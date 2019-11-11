import React from "react";
import PropTypes from "prop-types";
import MenuM from "@material-ui/core/Menu";

//Checks if drawers should open in iframe or uxpcanvas
let drawerContainer = null;

if (document.querySelector("#iframeContainer iframe")) {
  drawerContainer = document.querySelector("#iframeContainer iframe")
    .contentWindow.document.body;
} else if (document.querySelector("[data-id='canvas']")) {
  drawerContainer = document.querySelector("[data-id='canvas']");
}

function Menu(props) {
  return <MenuM {...props}
  containe=""
  container={drawerContainer}
  >{props.children}</MenuM>;
}

Menu.propTypes = {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * If `true`, the selected / first menu item will not be auto focused.
   */
  disableAutoFocusItem: PropTypes.bool,

  /**
   * Properties applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: PropTypes.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`
   */
  onClose: PropTypes.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: PropTypes.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: PropTypes.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: PropTypes.func,

  /**
   * If `true`, the menu is visible.
   */
  open: PropTypes.bool,

  /**
   * @ignore
   */
  PaperProps: PropTypes.object,

  /**
   * `classes` property applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  }), PropTypes.oneOf(['auto'])]) 
}

export { Menu as default };
