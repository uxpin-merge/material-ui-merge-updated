import React from "react";
import PropTypes from "prop-types";
import SwitchM from "@material-ui/core/Switch";

function Switch(props) {
  return <SwitchM {...props} />;
}

Switch.propTypes = {
  /**
   * If `true`, the switch is checked.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

    /**
   * If `true`, the switch will be disabled.
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

Switch.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
  onChange: () => undefined
};

export { Switch as default };
