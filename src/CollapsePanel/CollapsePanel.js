import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

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

  React.useEffect(() => {
    setOpen(props.collapsed);
  }, [props]);


  function handleClick() {
    setOpen(!open);
  }

  return (
    <Paper elevation={0}>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      disablePadding
    >

      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.toggleText}/>
        {open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon> }
      </ListItem>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper elevation={0} className={classes.nested}>
          {props.children}
        </Paper> 
      </Collapse>
    </List>
    </Paper>
  );
}

CollapsePanel.propTypes = {


  /**
   * The text to display as the collapse trigger.
   */
  toggleText: PropTypes.string,

    /**
   * If `true` the panel will be collapsed.
   */
  collapsed: PropTypes.bool,

  /**
  * The content of the panel.
  * @uxpinignoreprop
  */
  children: PropTypes.node,
};

CollapsePanel.defaultProps = {
  toggleText: "Collapse Me",
};

export { CollapsePanel as default };
