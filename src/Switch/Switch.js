import React from "react";
import PropTypes from "prop-types";
import SwitchM from "@material-ui/core/Switch";

function Switch(props) {
  return <SwitchM {...props} />;
}

Switch.propTypes = {
  /**
   * If `true`, the switch is checked.
   */
  checked: PropTypes.bool,

    /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
  * Change event to use with UXPin interactions.
  */
  onChange: PropTypes.func,

};

export { Switch as default };
