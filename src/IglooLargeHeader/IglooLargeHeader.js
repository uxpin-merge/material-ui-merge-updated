import React, { useState, useRef } from "react";
// import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import InputBase from "@material-ui/core/InputBase";


const useStyles = makeStyles(({ transitions }) => ({
  searchInput: ({ searchAppeared }) => ({
    width: searchAppeared ? 180 : 0,
    opacity: searchAppeared ? 1 : 0,
    transition: transitions.create(),
    backgroundColor: "#eee",
    marginTop: 8,
    marginLeft: 8,
    padding: "0 8px",
    display: "inline-block",
    color: "#333"
  }),
  secondAppBar: ({ trigger }) => ({
    zIndex: 1099,
    transition: transitions.create("top", {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.easeOut
    }),
    top: trigger ? 0 : 64
  }),
  appBarBg: {
    zIndex: 1098
  }
}));

const IglooLargeHeader = () => {
  const trigger = useScrollTrigger();
  const inputRef = useRef(null);
  const [searchAppeared, setSearchAppeared] = useState(false);
  const classes = useStyles({ searchAppeared, trigger });
  const handleSearchClick = () => {
    setSearchAppeared(!searchAppeared);
    if (!searchAppeared && inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={0} color="inherit">
          <Toolbar>
            <Grid container wrap={"nowrap"} alignItems={"center"}>
              <Grid item>
                <img
                  src="https://uc.uxpin.com/files/732773/730600/image-6d6f68.png"
                  height="48px"
                  alt="Igloo logo"
                />
              </Grid>
              <Grid item xs>
                <Grid
                  container
                  alignItems={"center"}
                  justify={"flex-end"}
                  spacing={0}
                  wrap={"nowrap"}
                >
                  <Grid item>
                    <InputBase
                      inputRef={inputRef}
                      className={classes.searchInput}
                    />
                    <IconButton
                      color="primary"
                      onClick={handleSearchClick}
                      aria-label="search"
                    >
                      <Icon>search</Icon>
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="primary" aria-label="account">
                      <Icon>account_circle</Icon>
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="primary" aria-label="account">
                      <Icon>favorite</Icon>
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="primary" aria-label="account">
                      <Icon>shopping_cart</Icon>
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
      <AppBar position={"sticky"} elevation={0} className={classes.appBarBg}>
        <Toolbar />
      </AppBar>
      <AppBar
        elevevation={2}
        position={"sticky"}
        className={classes.secondAppBar}
        color="inherit"
      >
        <Toolbar>
        tabs here
        </Toolbar>
      </AppBar>
    </>
  );  
};

IglooLargeHeader.propTypes = {};
IglooLargeHeader.defaultProps = {};

export default IglooLargeHeader;
