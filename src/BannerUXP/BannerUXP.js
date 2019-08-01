import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon/Icon";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit * 2}px`
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  },
  secondaryButton: {
    marginLeft: theme.spacing.unit
  }
});

function BannerUXP(props) {
  const { classes } = props;
  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16} alignItems="center">
          {props.hasIcon && (
            <Grid item>
              <Avatar className={classes.avatar}>
                <Icon>{props.icon}</Icon>
              </Avatar>
            </Grid>
          )}
          <Grid item>
            <Typography>{props.message}</Typography>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={8}>
          <Grid item>
            <Button color="primary" variant="text">
              {props.buttonOneLabel}
            </Button>
            {props.buttonTwoLabel ? (
              <Button
                color="primary"
                variant="text"
                className={classes.secondaryButton}
              >
                {props.buttonTwoLabel}
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Paper>
      <Divider />
    </div>
  );
}
BannerUXP.propTypes = {
  classes: PropTypes.object.isRequired,
  /**
   * The main message of the banner
   */
  message: PropTypes.string,
  
  /**
   * if `true`, dispplay the icon
   */
  hasIcon: PropTypes.bool,

  /**
   * The name of the icon from https://material.io/tools/icons.
   */
  icon: PropTypes.string,

  /**
   * The label of the first action button
   */
  buttonOneLabel: PropTypes.string,

  /**
   * Optional: The label of the second action button.
   * If no label is specified, button will not display
   */
  buttonTwoLabel: PropTypes.string,

};

export default withStyles(styles)(BannerUXP);
