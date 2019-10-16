import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
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

export default function MediaQuery() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">{'down(sm): red'}</Typography>
      <Typography variant="subtitle1">{'up(md): blue'}</Typography>
      <Typography variant="subtitle1">{'up(lg): green'}</Typography>
    </div>
  );
}
