import AvatarM from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import React from "react";

function AvatarImageUXP(props) {
  return (
    <AvatarM {...props}>
      {props.children}
    </AvatarM>
  );
}
// *********************
// ** Designer specific parameters exposed in UXPin. See MUI component documentation for additional parameters
// *********************

AvatarImageUXP.propTypes = {
  /**
   * The URL to avatar image
   */
  src: PropTypes.string,

};

export { AvatarImageUXP as default };
