import React from "react";
import PropTypes from "prop-types";
import CardM from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardHovered: {
    '&:hover': {
    cursor: "pointer",
    boxShadow: theme.shadows[8]
  },
}
}));


function Card(props) {
  const classes = useStyles();

  return (
    <CardM {...props} className={props.hasHover ? classes.cardHovered : null}>
      {props.children}
    </CardM>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  /**
 * Override or extend the styles applied to the component.
 * @uxpinignoreprop
 */
  classes: PropTypes.object,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool,

  /**
 * If `true`, the card will be raised when mouse hovering.
 */
  hasHover: PropTypes.bool,

  onClick: PropTypes.func,

};
Card.defaultProps = {
  // onClick: undefined,
};

export { Card as default };
