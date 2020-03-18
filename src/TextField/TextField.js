import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldM from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1)
  }
}));

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function TextField(props) {
  const classes = useStyles();
  console.log(props.uxpinRef);
  const { uxpinRef, disableTransformation, iconPosition, ...other } = props;
  return (
    <Box ref={props.uxpinRef}>
      <TextFieldM
        margin="dense"
        {...other}
        InputProps={
          props.icon
            ? props.iconPosition == "end"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon>{props.icon}</Icon>
                    </InputAdornment>
                  )
                }
              : {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>{props.icon}</Icon>
                    </InputAdornment>
                  )
                }
            : null
        }
        className={classes.textField}
      />
    </Box>
  );
}

TextField.propTypes = {
  /**
   * The label text.
   */
  label: PropTypes.string,

  /**
   * The default value of the textfield.
   */
  defaultValue: PropTypes.string,

  /**
   * The helper text.
   */
  helperText: PropTypes.string,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * If set, icon will display. Use the name of the icon from https://material.io/tools/icons.
   */
  icon: PropTypes.string,

  /**
   * Where to display the icon within the textfield.
   */
  iconPosition: PropTypes.oneOf(["start", "end"]),

  /**
   * If `true`, the textfield will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * If `true`, the textfield will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label is displayed as required.
   */
  required: PropTypes.bool,

  /**
   * If `true`, the textfield will be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the textfield will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,

  /**
   * If `true`, a textarea element will be rendered instead of an textfield.
   */
  multiline: PropTypes.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.string,

  /**
   * Focus event to use with UXPin interactions.
   */
  onFocus: PropTypes.func,

  /**
   * Blur event to use with UXPin interactions.
   */
  onBlur: PropTypes.func,

  /**
   * Change event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * PROPS NOT USED
   */

  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   * @uxpinignoreprop
   */
  autoComplete: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   */
  className: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  FormHelperTextProps: PropTypes.object,

  /**
   * The id of the `input` element.
   * Use that property to make `label` and `helperText` accessible for screen readers.
   * @uxpinignoreprop
   */
  id: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  InputLabelProps: PropTypes.object,

  /**
   * Properties applied to the `Input` element.
   * @uxpinignoreprop
   */
  InputProps: PropTypes.object,

  /**
   * Attributes applied to the native `input` element.
   * @uxpinignoreprop
   */
  inputProps: PropTypes.object,
  
  /**
   * @uxpinignoreprop
   */
  uxpinRef: PropTypes.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   * @uxpinignoreprop
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Name attribute of the `input` element.
   * @uxpinignoreprop
   */
  name: PropTypes.string,

  /**
   * The variant to use.
   */
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /**
   * The variant to use.
   */
  /** @uxpinignoreprop */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]),

  /**
   * The value of the `Input` element, required for a controlled component.
   * @uxpinignoreprop
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   * @uxpinignoreprop
   */
  rowsMax: PropTypes.string,

  /**
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @uxpinignoreprop
   */
  select: PropTypes.bool,
  /**
   * @uxpinignoreprop
   */
  SelectProps: PropTypes.object,

  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   *  @uxpinignoreprop
   */
  type: PropTypes.string,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @uxpinignoreprop
   */
  margin: PropTypes.oneOf(["none", "dense", "normal"])
};

export { TextField as default };
