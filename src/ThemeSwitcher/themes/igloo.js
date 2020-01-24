import { createMuiTheme } from "@material-ui/core/styles";

const igloo = createMuiTheme({
  palette: {
    primary: {
      light: "#5da2fa",
      main: "#0a74c7",
      dark: "#004996",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#4e4f51",
      main: "#262729",
      dark: "#000000",
      contrastText: "#ffffff"
    },
    decoration: {
      main: "#1EAEED"
    },
    headerBadges: {
      main: "red"
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
    MuiButton: {
      // Name of the rule
      label: {
        // Some CSS
        // color: "green" 
      }
    }
  }
});

export default igloo;
