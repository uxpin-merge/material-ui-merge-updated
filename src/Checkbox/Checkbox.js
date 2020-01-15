import React from "react";
import PropTypes from "prop-types";
import CheckboxM from "@material-ui/core/Checkbox";

function Checkbox(props) {
  return <CheckboxM {...props} />;
}

Checkbox.propTypes = {
  /**
   * If `true`, the checkbox is checked.
   */
  checked: PropTypes.bool,

    /**
   * If `true`, the checkbox will be disabled.
   */
  disabled: PropTypes.bool,

  /**
  * Change event to use with UXPin interactions.
  */
  onChange: PropTypes.func,

  /**
   * The icon to display when the component is checked.
   * @uxpinignoreprop
   */
  checkedIcon: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @uxpinignoreprop
   */
  color: PropTypes.oneOf(["primary", "secondary", "default"]),

  /**
   * If `true`, the ripple effect will be disabled.
   * @uxpinignoreprop
   */
  disableRipple: PropTypes.bool,

  /**
   * The icon to display when the component is unchecked.
   * @uxpinignoreprop
   */
  icon: PropTypes.node,

  /**
   * The id of the `input` element.
   * @uxpinignoreprop
   */
  id: PropTypes.string,

  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   * @uxpinignoreprop
   */
  indeterminate: PropTypes.bool,

  /**
   * The icon to display when the component is indeterminate.
   * @uxpinignoreprop
   */
  indeterminateIcon: PropTypes.node,

  /**
   * Properties applied to the `input` element.
   * @uxpinignoreprop
   */
  inputProps: PropTypes.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   * @uxpinignoreprop
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),



  /**
   * The input component property `type`.
   * @uxpinignoreprop
   */
  type: PropTypes.string,

  /**
   * The value of the component.
   * @uxpinignoreprop
   */
  value: PropTypes.string
};

export { Checkbox as default };
