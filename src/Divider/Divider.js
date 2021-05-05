import DividerM from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import React from "react";

function Divider(props) {
  let mt = props.marginTop * 8;
  let mb = props.marginBottom * 8;

  return (
    <DividerM
      {...props}
      style={{
        marginTop: mt,
        marginBottom: mb
      }}
    />
  );
}

export { Divider as default };

Divider.propTypes = {
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),

  /**
   * Top margin.
   * Each unit equals 8dp. Example:
   * 0=px, 1=8px, 2=16px, 3=24px ...
   */
  marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * Bottom margin.
   * Each unit equals 8dp. Example:
   * 0=px, 1=8px, 2=16px, 3=24px ...
   */
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * If true, the divider will have a lighter color.
   */
  light: PropTypes.bool,

  /**
   * Absolutely position the element.
   * @uxpinignoreprop
   */
  absolute: PropTypes.bool,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * @uxpinignoreprop
   */
  component: PropTypes.string,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object
};
Divider.defaultProps = {
  marginBottom: 0,
  marginTop: 0
}