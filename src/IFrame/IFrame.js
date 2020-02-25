import React from "react";
import { create } from "jss";
import { jssPreset } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import Frame, { FrameContextConsumer } from "react-frame-component";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import igloo from "../ThemeSwitcher/themes/igloo";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NoSsr from "@material-ui/core/NoSsr";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "200px"
  }
}));

let theme = createMuiTheme(igloo);



const CustomHead = props => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Previewer</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <base target="_parent" />

      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
      id="mui-merge-font"/>

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
      id="mui-merge-icons"/>
    </>
  );
};

const IFrame = ({ children, ...props }) => {
  
const classes = useStyles();

  return (
   <NoSsr>
    <Frame frameBorder={0} head={<CustomHead />}
    style={{
      width: "100%",
      height: "inherit",
      minHeight: "667px",
      border: "1px solid #ccc",
    }}
    sandbox =
        "allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-scripts"
    className={classes.root}
    >
      <FrameContextConsumer>
        {({ document, window }) => {
          const jss = create({
            plugins: [...jssPreset().plugins],
            insertionPoint: document.head
          });
          document.body.style.backgroundColor = "#ffffff";
          return (
            <StylesProvider jss={jss}>
              <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
              </ThemeProvider>
            </StylesProvider>
          );
        }}
      </FrameContextConsumer>
    </Frame>
    </NoSsr>
  );
};

export default IFrame

IFrame.propTypes = {
  children: PropTypes.node,
  frameWidth: PropTypes.number,
  frameHeight: PropTypes.number
}



