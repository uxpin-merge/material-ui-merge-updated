import DividerM from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import React from "react";

function Divider(props) {
  return <DividerM {...props} />;
}

export { Divider as default };

Divider.propTypes = {

    /**
    * The variant to use.
    */
   variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),
 
   /**
    * If true, the divider will have a lighter color.
    */
   light: PropTypes.bool,

   /**
    * Absolutely position the element.
    */
   absolute: PropTypes.bool,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

    /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

 };
