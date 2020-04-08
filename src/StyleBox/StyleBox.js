import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

export default function StyleBox(props) {
  return (
    <>
  <Box
 
          {...props}
        >
          
          {!props.children ? (
              <span>
                <center>
                  <p>Drag components into this wrapper</p>
                </center>
              </span>
            ) : (
              props.children
            )}
        </Box>

      {/* <Box {...props} >
        {!props.children ? (
              <span>
                <center>
                  <p>Drag components into this wrapper</p>
                </center>
              </span>
            ) : (
              props.children
            )}
      </Box> */}
    </>
  );
}


StyleBox.propTypes = {
  /**
   * The content of the box.
   */
  children: PropTypes.node,

  clone: PropTypes.bool,

  /**
   * Color of text
   */

  color: PropTypes.oneOf(['primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),

  bgcolor: PropTypes.oneOf(['primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),



  /**
   * All Padding.
   * Each unit equals 8dp. Example:
   * 0=px, 1=8px, 2=16px, 3=24px ...
   */
  padding: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

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

  /**
   * Border margin.
   * Each unit equals 8dp. Example:
   * 0=px, 1=8px, 2=16px, 3=24px ...
   */
  border: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * Border Top.
   * Each unit equals 8dp. Example:
   * 0=px, 1=8px, 2=16px, 3=24px ...
   */
  borderTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * Border margin.
   * Each unit equals 8dp. Example:
   * 0=px, 1=8px, 2=16px, 3=24px ...
   */
  borderRight: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * Border margin.
   * Each unit equals 8dp. Example:
   * 0=px, 1=8px, 2=16px, 3=24px ...
   */
  borderBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * Border margin.
   * Each unit equals 8dp. Example:
   * 0=px, 1=8px, 2=16px, 3=24px ...
   */
  borderLeft: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  borderColor: PropTypes.oneOf(['primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
  borderRadius: PropTypes.string,

  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  // textOverflow: PropTypes.oneOf(["clip", "ellipsis"]),
};
