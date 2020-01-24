import React from "react";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import igloo from "../ThemeSwitcher/themes/igloo";

let theme = createMuiTheme(igloo);

theme = responsiveFontSizes(theme);

export default function UXPinWrapper({ children }) {

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
  
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
