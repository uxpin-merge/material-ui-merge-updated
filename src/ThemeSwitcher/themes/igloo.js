import { createMuiTheme } from "@material-ui/core/styles";

const igloo = createMuiTheme({
  palette: {
    primary: {
      light: "#5da2fa",
      main: "#d4001c",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#4e4f51",
      main: "#393d41",
      dark: "#000000",
      contrastText: "#ffffff"
    },
    decoration: {
      main: "#d4001c"
    },
    headerBadges: {
      main: "red",
    },
    text: {
      // primary: '#000000',
      // secondary: "#eeeeee",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    error:{
      main: "#e72400"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"arial", sans-serif',
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
      textTransform: "capitalize",
      fontSize: "1rem"
    },
    overline: {
      fontSize: "0.625rem",
      letterSpacing: "1.5px",
      fontWeight: "700"
    }
  },
  overrides: {
    // Name of the component
    MuiOutlinedInput: {
      // Name of the rule
      root: {
        // Some CSS
        backgroundColor: "#ffffff" 
      }
    }
  }
});

export default igloo;
