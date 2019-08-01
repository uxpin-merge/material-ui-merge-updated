import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import PropTypes from "prop-types";
import React from "react";

const target = createMuiTheme({
  palette: {
    primary: {
      light: '#5da2fa',
      main: '#f44336',
      dark: '#004996',
      contrastText: '#ffffff', 
    },
    secondary: {
      light: '#4e4f51',
      main: '#ff9100',
      dark: '#000000',
      contrastText: '#ffffff',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontSize: '5rem',
    },
    h6: {
      fontWeight: '700',
    },
    subtitle2: {
      fontWeight: '700',
    },
    button: {
      fontWeight: '700',
      fontSize: '0.8125rem',
    },
    overline:{
      fontSize: '0.625rem',
      letterSpacing: '1.5px',
      fontWeight: '700',
    }
  },
});


function ThemeTarget(props) {
  return (
  <MuiThemeProvider {...props} theme={target}>
    { !props.children
    ?
      <span>
        <center>
        <p>Drag components into this wrapper to apply Target's theme</p>
        </center>
      </span>
    :
      props.children
    }
  </MuiThemeProvider>
  );
}

export { ThemeTarget as default };

ThemeTarget.propTypes = {
/**
   * You can wrap a node.
   */
  children: PropTypes.node,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side.
   * You can significantly speed up the traversal with this property.
   */
  disableStylesGeneration: PropTypes.bool,

  /**
   * @ignore
   *
   * In beta.
   */
  sheetsCache: PropTypes.object,

  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: PropTypes.object,

  /**
   * A theme object.
   */
  theme: PropTypes.object,

 };






 // import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import Button from "@material-ui/core/Button";
// import React from 'react';
// import darkTheme from '../Themes/target';
// import lightTheme from '../Themes/tdds';


// const theme1 = createMuiTheme(lightTheme);
// const theme2 = createMuiTheme(darkTheme)

// class ThemePicker extends React.Component {
//   state = {
//     isThemeLight: true,
//     selectedTheme: theme1
//   }
//   onChange = () => {
//     this.setState=({ selectedTheme: theme2 })
//   }

//   handleChange(event, value) {
//     this.setState({ "selectedTheme": value })
// }


//   render() {
//      const { isThemeLight } = this.state;
//      return (
//        <MuiThemeProvider theme={this.state.selectedTheme} value={this.state.selectedTheme} onChange={(event, value) => this.handleChange(event, value)}>



//          <Button onClick={this.handleChange} color="primary" variant="contained" value="target">Change Dark</Button>
//        </MuiThemeProvider>
//      );
//   }
// }
// export { ThemePicker as default };
