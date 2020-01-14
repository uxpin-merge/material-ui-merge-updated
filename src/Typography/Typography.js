import React from "react";
import PropTypes from "prop-types";
import TypographyM from "@material-ui/core/Typography";
import ReactHtmlParser from "react-html-parser";

function Typography(props) {
  return (
    <TypographyM {...props} component={props.component}>
      {ReactHtmlParser(props.children)}{" "}
    </TypographyM>
  );
}

Typography.propTypes = {
  /**
   * The text to display. Basic html tags supported.
   * @uxpinpropname  Text/HTML
   * */
  children: PropTypes.node,

  /**
   * The typography style to apply.
   */
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "srOnly",
    "inherit"
  ]),
  /**
   * Alignment of text.
   */
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    "default",
    "error",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary"
  ]),

  /**
   *  Controls if typography is inline or block level.
   */
  display: PropTypes.oneOf(["initial", "block", "inline"]),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,

  /**
   * Map typography to another html tag. 
   */
  component: PropTypes.string,

  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   * The default mapping is the following:
   * @uxpinignoreprop
   */
  headlineMapping: PropTypes.object,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object
};

export { Typography as default };
