import AvatarM from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import React from "react";

function AvatarLetterUXP(props) {
  return (
    <AvatarM
      {...props}
    >
      {props.children}
    </AvatarM>
  );
}

// *********************
// ** Designer specific parameters exposed in UXPin. See MUI component documentation for additional parameters
// *********************

AvatarLetterUXP.propTypes = {
 
  /**
   * Letters to be displayed in icon. Limit two please.
   */
  children: PropTypes.node,
};

export { AvatarLetterUXP as default };