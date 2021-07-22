import { createMuiTheme } from "@material-ui/core/styles";

const igloo = createMuiTheme({
  palette: {
    primary: {
      light: "#5da2fa",
      main: "#2684FF",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#4e4f51",
      main: "#393d41",
      dark: "#000000",
      contrastText: "#ffffff"
    },
    decoration: {
      main: "#2684FF"
    },
    headerBadges: {
      main: "#2684FF",
    },
    text: {
      primary: '#172b4d',
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
  // props: {
  //   // Name of the component ⚛️
  //   MuiCard: {
  //     // The default props to change
  //     raised: true, // No more ripple, on the whole application 💣!
  //   },
  // },
  overrides: {
    // Name of the component
    MuiOutlinedInput: {
      // Name of the rule
      root: {
        // Some CSS
        backgroundColor: "#ffffff" 
      }
    },
    MuiIcon:{
      root:{
        fontFamily: 'Material Icons Outlined'
      },
    },
  }
});

export default igloo;

