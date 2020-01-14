import PropTypes from "prop-types";
import React from "react";
import TooltipM from "@material-ui/core/Tooltip";

function TooltipUXP(props) {
  return <TooltipM {...props} PopperProps={{ keepMounted: true, disablePortal: true }}>{props.children}</TooltipM>;
}

export default TooltipUXP;

TooltipUXP.propTypes = {
  /**
   * Text to display in the Tooltip.
   * @uxpinpropname  Tooltip Text
   */
  title: PropTypes.string,
  
  /**
   * Where the Tooltip should display in relation to its nested element.
   */
  placement: PropTypes.oneOf([
    "bottom-end",
    "bottom-start",
    "bottom",
    "left-end",
    "left-start",
    "left",
    "right-end",
    "right-start",
    "right",
    "top-end",
    "top-start",
    "top"
  ]),

  /**
   * If `true`, the tooltip is shown.
   * @uxpinignoreprop
   */
  open: PropTypes.bool,

  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   * @uxpinignoreprop
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   * @uxpinignoreprop
   */
  onOpen: PropTypes.func,

  /**
   * Elements contained by Tooltip.
   * @uxpinignoreprop 
   */
  children: PropTypes.node

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  // classes: PropTypes.object,

  /**
   * Do not respond to focus events.
   */
  // disableFocusListener: PropTypes.bool,

  /**
   * Do not respond to hover events.
   */
  // disableHoverListener: PropTypes.bool,

  /**
   * Do not respond to long press touch events.
   */
  // disableTouchListener: PropTypes.bool,

  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  // enterDelay: PropTypes.number,

  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  // enterTouchDelay: PropTypes.number,

  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * This property is used with aria-describedby to solve the accessibility issue.
   * If you don't provide this property. It falls back to a randomly generated id.
   */
  // id: PropTypes.string,

  /**
   * Makes a tooltip interactive, i.e. will not close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   */
  // interactive: PropTypes.bool,

  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  // leaveDelay: PropTypes.number,

  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  // leaveTouchDelay: PropTypes.number,

  /**
   * Properties applied to the [`Popper`](/api/popper/) element.
   */
  // PopperProps: PropTypes.object,

  /**
   * @ignore
   */
  // theme: PropTypes.object,

  /**
   * The component used for the transition.
   */
  // TransitionComponent: _utils.componentPropType,

  /**
   * Properties applied to the `Transition` element.
   */
  // TransitionProps: PropTypes.object
};

// export default withStyles(styles)(TooltipSimple);
