import React from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5da2fa",
      main: "#0a74c7",
      dark: "#004996",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#4e4f51",
      main: "#262729",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    decoration:{
      main: "#1EAEED",
    },
    headerBadges:{
      main: "red",
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontSize: "5rem"
    },
    h6: {
      fontWeight: "700"
    },
    subtitle2: {
      fontWeight: "700"
    },
    button: {
      fontWeight: "700",
      fontSize: "0.8125rem"
    },
    overline: {
      fontSize: "0.625rem",
      letterSpacing: "1.5px",
      fontWeight: "700"
    }
  }
});

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
