import React from "react";
import PropTypes from "prop-types";
import BoxM from '@material-ui/core/Box';


function Box(props) {

  let pt = props.paddingTop * 8;
  let pr = props.paddingRight * 8;
  let pb = props.paddingBottom * 8;
  let pl = props.paddingLeft * 8;
  let mt = props.marginTop * 8;
  let mr = props.marginRight * 8;
  let mb = props.marginBottom * 8;
  let ml = props.marginLeft * 8;
  
return (
     <BoxM {...props}
       >
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
  paddingTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  /**
  * Right Padding.
  * Each unit equals 8dp. Example:
  * 0=px, 1=8px, 2=16px, 3=24px ... 
  */
  paddingRight: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  /**
  * Bottom Padding.
  * Each unit equals 8dp. Example:
  * 0=px, 1=8px, 2=16px, 3=24px ... 
  */
  paddingBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  /**
  * Left Padding.
  * Each unit equals 8dp. Example:
  * 0=px, 1=8px, 2=16px, 3=24px ... 
  */
  paddingLeft: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),


    /**
  * Top margin.
  * Each unit equals 8dp. Example:
  * 0=px, 1=8px, 2=16px, 3=24px ... 
  */
 marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
 /**
 * Right margin.
 * Each unit equals 8dp. Example:
 * 0=px, 1=8px, 2=16px, 3=24px ... 
 */
marginRight: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
 /**
 * Bottom margin.
 * Each unit equals 8dp. Example:
 * 0=px, 1=8px, 2=16px, 3=24px ... 
 */
marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
 /**
 * Left margin.
 * Each unit equals 8dp. Example:
 * 0=px, 1=8px, 2=16px, 3=24px ... 
 */
 marginLeft: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),



 };

 export { Box as default };