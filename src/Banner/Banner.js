import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import SignalWifiOffIcon from "@material-ui/icons/SignalWifiOff";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

function Banner(props) {
  return (
    <Box clone pt={2} pr={1} pb={1} pl={2}>
      <Paper elevation={0}>
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          {props.icon && (
            <Grid item>
              <Box bgcolor="primary.main" clone>
                <Avatar>
                  <SignalWifiOffIcon />
                </Avatar>
              </Box>
            </Grid>
          )}
          <Grid item>
            <Typography>{props.message}</Typography>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={1}>
          <Grid item>
            {props.buttonOneLabel ? (
              <Button color="primary">
                {props.buttonOneLabel}
              </Button>
            ) : null}
            {props.buttonTwoLabel ? (
              <Button color="primary" variant="text">
                {props.buttonTwoLabel}
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

Banner.propTypes = {
  classes: PropTypes.object,
  /**
   * The main message of the banner
   */
  message: PropTypes.string,

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
  buttonTwoLabel: PropTypes.string
};

export default Banner;
