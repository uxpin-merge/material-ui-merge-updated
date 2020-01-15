import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "@material-ui/core/FormControlLabel";
import Radio from "../Radio/Radio";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

function RadioWithLabel(props) {
  const classes = useStyles();

  return (
    <FormControlLabelM
      {...props}
      control={<Radio />}
      label={props.label}
      className={classes.root}
    />
  );
}

RadioWithLabel.propTypes = {
  /**
   * If `true`, the checkbox appears selected.
   */
  checked: PropTypes.bool,

  /**
   * If `true`, the checkbox will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The label text.
   */
  label: PropTypes.string,

  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(["end", "start"]),

  /**
   * Change event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   * @uxpinignoreprop
   */
  control: PropTypes.element
};

export { RadioWithLabel as default };
