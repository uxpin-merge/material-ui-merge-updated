import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DividerUXP from '../DividerUXP/DividerUXP';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    padding: theme.spacing(2),
  },
}));

function CollapsePanel(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.collapsed);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      disablePadding
    >

      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.toggleText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
      {/* <DividerUXP light variant="middle"/> */}
        <Paper elevation={0} className={classes.nested}>
          {props.children}
        </Paper> 
      </Collapse>
    </List>
  );
}

CollapsePanel.propTypes = {
  /**
   * The content of the expansion panel.
   */
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  toggleText: PropTypes.string
};

CollapsePanel.defaultProps = {
  toggleText: "Collapse Me",
};

export { CollapsePanel as default };
