import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";

class MenuExposedUXP extends React.Component {
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

MenuExposedUXP.propTypes = {
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]),

  /**
   * The label content.
   */
  label: PropTypes.string,

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
   * The initially selected menu item.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The helper text content.
   */
  helperText: PropTypes.string,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label is displayed as required and the input will be required.
   */
  required: PropTypes.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(["none", "dense", "normal"]),

  onBlur: PropTypes.func,

  /**
   * Callback fired when the value is changed.
   */
  onChange: PropTypes.func,

  onFocus: PropTypes.func,

  /**
   * Prefix text added to the input.
   */
  adornmentText: PropTypes.string,

  /**
   * Prefix icon added to the input if adornmentText was not provided.
   */
  adornmentIcon: PropTypes.string
};

MenuExposedUXP.defaultProps = {
  menuItems: [
    { label: "Home", value: "1" },
    { label: "Mobile", value: "2" },
    { label: "Office", value: "3", hasDivider: "true" },
    { label: "Emergency", value: "4" }
  ],
  fullWidth: "true",
  label: "Phone Type",
  variant: "outlined"
};

export default MenuExposedUXP;
