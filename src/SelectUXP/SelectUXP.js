import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import TextField from "../TextField/TextField";

class SelectUXP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      userAction: false
    };
  }

  componentDidMount() {
    if (this.state.userAction === false) {
      this.setState({
        selectedValue: this.props.defaultValue,
        userAction: true
      });
    }
  }

  handleChange = () => event => {
    this.setState({ selectedValue: event.target.value });
  };

  renderAdornment = () => {
    if (this.props.adornmentText || this.props.adornmentIcon) {
      return (
        <InputAdornment variant={this.props.variant} position={"start"}>
          {this.props.adornmentText ? (
            this.props.adornmentText
          ) : (
            <Icon>{this.props.adornmentIcon}</Icon>
          )}
        </InputAdornment>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <TextField
          {...this.props}
          select
          value={this.state.selectedValue}
          onChange={this.handleChange()}
          InputProps={{
            startAdornment: this.renderAdornment()
          }}
          disablePortal={true}
          variant="outlined"
          keepMounted
        >
          {this.props.menuItems.map(option => (
            <MenuItem
              key={option.value}
              value={option.value}
              divider={option.hasDivider}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

SelectUXP.propTypes = {

  /**
   * List of menu items.
   * Required: label, value (must be unique)
   * Optional: hasDivider
   * Format:
  [
       { label: "Home", value: "1", },
       { label: "Mobile", value: "2", hasDivider: "true"},
       { label: "Office", value: "3" },
   ]
  */
  menuItems: PropTypes.array,

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
 
};

SelectUXP.defaultProps = {
  menuItems: [
    { label: "Home", value: "1" },
    { label: "Mobile", value: "2" },
    { label: "Office", value: "3", hasDivider: "true" },
    { label: "Emergency", value: "4" }
  ],
  fullWidth: "true",
  label: "Phone Type",
};

export default SelectUXP;
