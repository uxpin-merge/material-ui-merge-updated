import AvatarM from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import React from "react";

function AvatarIconUXP(props) {
  return (
    <AvatarM {...props}>
    {props.children} 
    </AvatarM>
  );
}

AvatarIconUXP.propTypes = {
  children: PropTypes.node,
};


export { AvatarIconUXP as default };
