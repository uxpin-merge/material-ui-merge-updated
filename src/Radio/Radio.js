import React from "react";
import PropTypes from "prop-types";
import RadioM from "@material-ui/core/Radio";

function Radio(props) {
  return <RadioM {...props} />;
}

Radio.propTypes = {
  /**
   * If `true`, the radio is checked.
   */
  checked: PropTypes.bool,

    /**
   * If `true`, the radio will be disabled.
   */
  disabled: PropTypes.bool,

  /**
  * Change event to use with UXPin interactions.
  */
  onChange: PropTypes.func,
};

export { Radio as default };
