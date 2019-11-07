import React from "react";
import PropTypes from "prop-types";
import CardM from "@material-ui/core/Card";

function TestComponent(props) {
  return (
    <CardM {...props}>
      {props.children}
    </CardM>
  );
}

TestComponent.propTypes = {
  children: PropTypes.node,
    /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool
};

export { TestComponent as default };
