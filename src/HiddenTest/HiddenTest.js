import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
  color: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: "blue",
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: "green",
    },
  },
}));

function BreakpointUp(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <>
    <div className={classes.color}>
      <Typography variant="subtitle1">{'down(sm): red'}</Typography>
      <Typography variant="subtitle1">{'up(md): blue'}</Typography>
      <Typography variant="subtitle1">{'up(lg): green'}</Typography>
    </div>
    <div className={classes.root}>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden xsUp implementation='css'>
          <Paper className={classes.paper}>xsUp</Paper>
        </Hidden>
        <Hidden smUp implementation='css'>
          <Paper className={classes.paper}>smUp</Paper>
        </Hidden>
        <Hidden mdUp implementation='css'>
          <Paper className={classes.paper}>mdUp</Paper>
        </Hidden>
        <Hidden lgUp implementation='css'>
          <Paper className={classes.paper}>lgUp</Paper>
        </Hidden>
        <Hidden xlUp implementation='css'>
          <Paper className={classes.paper}>xlUp</Paper>
        </Hidden>
      </div>
    </div>
    </>
  );
}

BreakpointUp.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth({initialWidth: 'lg'})(BreakpointUp);
