import React from "react";
import PropTypes from "prop-types";
import FabM from "@material-ui/core/Fab";

function Fab(props) {
  return (
    <FabM {...props}>
      {props.children}
      {props.label}
    </FabM>
  );
}

Fab.propTypes = {
  /**
   * Label of the button.
   */
  label: PropTypes.string,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["round", "extended"]),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * OnClick event
   */
  onClick: PropTypes.func,

  /**
   * The content of the button.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * @uxpinignoreprop
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * @uxpinignoreprop
   */
  component: PropTypes.string,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   * @uxpinignoreprop
   */
  disableFocusRipple: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   * @uxpinignoreprop
   */
  disableRipple: PropTypes.bool,

  /**
   * @uxpinignoreprop
   */
  focusVisibleClassName: PropTypes.string,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   * @uxpinignoreprop
   */
  href: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  type: PropTypes.string,
};

export { Fab as default };
