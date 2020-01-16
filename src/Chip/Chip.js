import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import ChipM from "@material-ui/core/Chip";
import Icon from "../Icon/Icon"

const useStyles = makeStyles(theme => ({
  root:{
    backgroundColor: theme.palette.grey[200],
  },
  chipMargin: {
    margin: theme.spacing(0.5),
  },
}));

function Chip(props) {
  const classes = useStyles(props);

  const [chipDeleted, setChipDeleted] = React.useState(false);

  return (
    <>
      {!chipDeleted ? (
        <ChipM
          {...props}
          onDelete={
            props.deletable
              ? () => {
                  setChipDeleted(true);
                }
              : null
          }
          icon={
            props.icon ? 
            <Icon>{props.icon}</Icon>
            : null
          }
          className = {classes.root}
          style={{ margin: props.hasMargins ? '4px': '0'}}

        />
      ) : null}
    </>
  );
}

Chip.propTypes = {

  /**
   * The text of the chip.
   */
  label: PropTypes.string,


  /**
   * If set, icon will display. Use the name of the icon from https://material.io/tools/icons.
   */
  icon: PropTypes.string,


  /**
   * If true, the chip will appear clickable.
   */
  clickable: PropTypes.bool,

  /**
   * If true, the chip will appear show delete icon.
   */
  deletable: PropTypes.bool,

  /**
  * If true, the chip will have a margin. This is helpful when creating a collection of chips.
  */
  hasMargins: PropTypes.bool,
  
  /**
   * Click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,
  

  /**
   * UNUSED PROPS
   */

   /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @uxpinignoreprop
   */
  color: PropTypes.oneOf(["default", "primary", "secondary"]),

  /**
   * Delete event to use with UXPin interactions.
   * @uxpinignoreprop
   */
  onDelete: PropTypes.func,

  /**
   * Avatar element.
   * @uxpinignoreprop
   */
  avatar: PropTypes.element,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * @uxpinignoreprop
   */
  component: PropTypes.string,

  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   * @uxpinignoreprop
   */
  deleteIcon: PropTypes.node,

  /**
   * The variant to use.
   * @uxpinignoreprop
   */
  variant: PropTypes.oneOf(["default", "outlined"])
};

export { Chip as default };
