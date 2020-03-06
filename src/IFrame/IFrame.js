import React from "react";
import { create } from "jss";
import { jssPreset } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import Frame, { FrameContextConsumer } from "react-frame-component";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import igloo from "../ThemeSwitcher/themes/igloo";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NoSsr from "@material-ui/core/NoSsr";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%"
  },
  iframe: props => ({
    //  display: "flex",
    margin: "0 auto",
    border: "1px solid #ccc",
    height: props.frameHeight,
    width: props.frameWidth
  }),
  inactiveDiv: props => ({
    //  display: "flex",
    margin: "0 auto",
    border: "1px dashed blue",
    width: props.frameWidth
  })
}));

let theme = createMuiTheme(igloo);

const CustomHead = props => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Previewer</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <base target="_parent" />

      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
        id="mui-merge-font"
      />

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
        id="mui-merge-icons"
      />
    </>
  );
};

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function IFrame(props) {
  const classes = useStyles(props);

  return (
    <NoSsr>
      <div className={classes.root}>
        {props.active ? (
          <Frame
            frameBorder={0}
            head={<CustomHead />}
            id="target"
            sandbox="allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-scripts"
            className={classes.iframe}
            contentDidMount={props.contentDidMount}
            contentDidUpdate={props.contentDidMount}

          >
            <FrameContextConsumer>
              {({ document, window }) => {

                const jss = create({
                  plugins: [...jssPreset().plugins],
                  insertionPoint: document.head
                });

                return (
                  <StylesProvider jss={jss}>
                    <ThemeProvider theme={theme}>
                      <CssBaseline />
                      {props.children}
                    </ThemeProvider>
                  </StylesProvider>
                );
              }}
            </FrameContextConsumer>
          </Frame>
        ) : (
          <Paper className={classes.inactiveDiv} elevation={0} square>
            {props.children}
          </Paper>
        )}
      </div>
    </NoSsr>
  );
}

export default IFrame;

IFrame.propTypes = {
  children: PropTypes.node,
  frameWidth: PropTypes.number,
  frameHeight: PropTypes.number,
  active: PropTypes.bool,
};

IFrame.defaultProps = {
  frameWidth: 300,
  frameHeight: 300,
  active: true
};
