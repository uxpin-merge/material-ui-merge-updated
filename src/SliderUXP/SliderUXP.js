import PropTypes from "prop-types";
import React from "react";
import SliderM from "@material-ui/lab/Slider";

export default class Slider extends React.Component {
  constructor(props) {
    super()

    this.state = {
      "value": 0,
      "userAction": false
    }
  }

  componentDidMount() {
    if (this.state.userAction === false) {
      this.setState({
        "value": this.props.defaultValue
      });
    }
  }

  handleChange(event, value) {
    this.setState({
      "value": value,
      "userAction": true
    })
  }
  render() {
    return <SliderM {
      ...this.props
    }
    value = {
      this.state.value
    }
    onChange = {
      (event, value) => this.handleChange(event, value)
    }
    />;
  }
}

Slider.propTypes = {
  /**
   * Initial percentage value of slider.
   */
  defaultValue: PropTypes.number,

  /**
   * If `true`, the slider will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: PropTypes.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: PropTypes.number,
  /**
   * Callback function that is fired when the slider's value changed.
   */
  onChange: PropTypes.func,
  /**
   * Callback function that is fired when the slide has stopped moving.
   */
  onDragEnd: PropTypes.func,
  /**
   * Callback function that is fired when the slider has begun to move.
   */
  onDragStart: PropTypes.func,
  /**
   * The granularity the slider can step through values.
   */
  step: PropTypes.number,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * The component used for the slider icon.
   * This is optional, if provided should be a react element.
   */
  thumb: PropTypes.element,
  /**
   * The value of the slider.
   */
  value: PropTypes.number.isRequired,
  /**
   * the reducer used to process the value emitted from the slider. If `null` or
   * the same value is returned no change is emitted.
   * @param {number} rawValue - value in [min, max]
   * @param {SliderProps} props - current props of the Slider
   * @param {Event} event - the event the change was triggered from
   */
  valueReducer: PropTypes.func,
  /**
   * If `true`, the slider will be vertical.
   */
  vertical: PropTypes.bool,
};