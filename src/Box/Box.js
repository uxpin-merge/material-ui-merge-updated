import React from "react";
import PropTypes from "prop-types";
import BoxM from '@material-ui/core/Box';
const theme = {
  spacing: [0, 2, 3, 5, 8],
}
function Box(props) {
   return (
     <BoxM {...props} paddingTop={props.paddingTop} paddingRight={props.paddingRight} paddingBottom={props.paddingBottom} paddingLeft={props.paddingLeft}>
       {props.children}
     </BoxM>
   );
 }
Box.propTypes = {
  /**
   * The content of the box.
   */
  children: PropTypes.node,
  /**
  * Top Padding.
  * Each unit equals 8dp. Example:
  * 0=px, 1=8px, 2=16px, 3=24px ... 
  */
  paddingTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  /**
  * Right Padding.
  * Each unit equals 8dp. Example:
  * 0=px, 1=8px, 2=16px, 3=24px ... 
  */
  paddingRight: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  /**
  * Bottom Padding.
  * Each unit equals 8dp. Example:
  * 0=px, 1=8px, 2=16px, 3=24px ... 
  */
  paddingBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  /**
  * Left Padding.
  * Each unit equals 8dp. Example:
  * 0=px, 1=8px, 2=16px, 3=24px ... 
  */
  paddingLeft: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  // component: React.ElementType
  // clone: PropTypes.bool,
 };
 Box.defaultProps = {
  // paddingLeft: 0,

};
 export { Box as default };