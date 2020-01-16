import React from "react";
import PropTypes from "prop-types";
import RadioGroupM from "@material-ui/core/RadioGroup";

function RadioGroup(props) {
  return <RadioGroupM {...props}>{props.children}</RadioGroupM>;
}

RadioGroup.propTypes = {

    /**
   * Value of the selected radio. This is the value specified in nested RadioWithLabel components.
   * @uxpinpropname  Selected Value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

  /**
  * Change event to use with UXPin interactions.
  */
 onChange: PropTypes.func,

  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * The name used to reference the value of the control.
   * @uxpinignoreprop
   */
  name: PropTypes.string,

  /**
   * @ignore
   * @uxpinignoreprop
   */
  onKeyDown: PropTypes.func,


};

export { RadioGroup as default };
