import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

const themeDB = {
  a: {
    primaryColor: "#0f0",
    secondaryColor: "#f0f"
  },
  b: {
    primaryColor: "#ff0",
    secondaryColor: "#0ff"
  }
};
const createThemeFromThemeDBEntry = themeDBEntry => {
  return createMuiTheme({
    palette: {
      primary: {
        main: themeDBEntry.primaryColor
      },
      secondary: {
        main: themeDBEntry.secondaryColor
      }
    }
  });
};
class ThemeTarget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTheme: createMuiTheme() };
  }
  switchToThemeA = () => {
    const themeA = createThemeFromThemeDBEntry(themeDB.a);
    this.setState({ currentTheme: themeA });
  };
  switchToThemeB = () => {
    const themeB = createThemeFromThemeDBEntry(themeDB.b);
    this.setState({ currentTheme: themeB });
  };
  useDefaultTheme = () => {
    this.setState({ currentTheme: createMuiTheme() });
  };
  render() {
    return (
      <>
        <CssBaseline />
        <MuiThemeProvider theme={this.state.currentTheme}>
          <AppBar position="static">AppBar using Primary Color</AppBar>
          <AppBar position="static" color="secondary">
            AppBar using Secondary Color
          </AppBar>
          <br />
          <Button
            onClick={this.switchToThemeA}
            variant="contained"
            color="primary"
          >
            Use Theme A
          </Button>
          <Button
            onClick={this.switchToThemeB}
            variant="contained"
            color="secondary"
          >
            Use Theme B
          </Button>
          <Button onClick={this.useDefaultTheme} color="secondary">
            Use Default Theme
          </Button>
          {this.props.children}
        </MuiThemeProvider>
      </>
    );
  }
}


export { ThemeTarget as default };

ThemeTarget.propTypes = {
/**
   * You can wrap a node.
   */
  children: PropTypes.node,


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
