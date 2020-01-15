import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "@material-ui/core/FormControlLabel";
import Checkbox from "../Checkbox/Checkbox";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

function CheckboxWithLabel(props) {
  const classes = useStyles();

  return (
    <FormControlLabelM
      {...props}
      control={<Checkbox />}
      label={props.label}
      className={classes.root}
    />
  );
}

CheckboxWithLabel.propTypes = {
  /**
   * If `true`, the checkbox is checked.
   */
  checked: PropTypes.bool,

    /**
   * If `true`, the checkbox will be disabled.
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

  /**
   * The position of the label.
   * @uxpinignoreprop
   */
  labelPlacement: PropTypes.oneOf(["end", "start"]),

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   * @uxpinignoreprop
   */
  control: PropTypes.element
};

export { CheckboxWithLabel as default };
