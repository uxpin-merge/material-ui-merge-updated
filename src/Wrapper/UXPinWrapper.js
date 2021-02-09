import React from "react";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import igloo from "../ThemeSwitcher/themes/igloo";
import Paper from "@material-ui/core/Paper";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { makeStyles, useTheme } from "@material-ui/core/styles";


let theme = createMuiTheme(igloo);

theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  root: {
    background: "transparent"
  },
}));


export default function UXPinWrapper({ children }) {

  const classes = useStyles();
  // const theme = useTheme();


  if (!document.getElementById("mui-merge-font")) {
    let lato = document.createElement("link");
    lato.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Lato:300,400,700"
    );
    lato.setAttribute("rel", "stylesheet");
    lato.setAttribute("id", "mui-merge-font");
    document.head.appendChild(lato);
  }

  if (!document.getElementById("mui-merge-icons")) {
    let icons = document.createElement("link");
    icons.setAttribute(
      "href",
      "https://fonts.googleapis.com/icon?family=Material+Icons"
    );
    icons.setAttribute("rel", "stylesheet");
    icons.setAttribute("id", "mui-merge-icons");
    document.head.appendChild(icons);
  }
  
  return <ThemeProvider theme={theme}><Paper elevation={0} className={classes.root}>{children}</Paper></ThemeProvider>;
}
