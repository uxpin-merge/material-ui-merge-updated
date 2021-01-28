import React from "react";
import PropTypes from "prop-types";
import RadioM from "@material-ui/core/Radio";

function Radio(props) {
  return <RadioM {...props} />;
}

Radio.propTypes = {
   /**
   * If `true`, the radio is checked.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

    /**
   * If `true`, the radio will be disabled.
   */
  disabled: PropTypes.bool,

  /**
  * The value of the component.
  */
  value: PropTypes.string,

  /**
  * Change event to use with UXPin interactions.
  */
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
  onChange: () => undefined
};

export { Radio as default };
