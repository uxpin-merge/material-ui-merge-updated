import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme, useTheme } from "@material-ui/core/styles";
import theme2 from "./themes/theme2";
import theme1 from "./themes/theme1";

function ThemeSwitcher(props) {

let selectedTheme = useTheme();
console.log("selected theme: ", selectedTheme)

  function makeCustomTheme() {
    const customTheme = createMuiTheme({
      ...selectedTheme,
      palette: {
        primary: {
          main: props.primaryColor
            ? props.primaryColor
            : selectedTheme.palette.primary.main
        },
        secondary: {
          main: props.secondaryColor
            ? props.secondaryColor
            : selectedTheme.palette.secondary.main
        }
      },
    });
    return customTheme;
  }

  function GetTheme(themeProfile) {
    switch (themeProfile) {
      case "theme1":
        selectedTheme = theme1;
        break;
      case "theme2":
        selectedTheme = theme2;
        break;
      case "custom":
        selectedTheme = makeCustomTheme();
        break;
      default:
        selectedTheme = selectedTheme;
    }

    return selectedTheme;
  }

  return (
    <MuiThemeProvider theme={GetTheme(props.themeProfile)}>
      {!props.children ? (
        <span>
          <center>
            <p>Drag components into this wrapper to apply themes.</p>
          </center>
        </span>
      ) : (
        props.children
      )}
    </MuiThemeProvider>
  );
};

ThemeSwitcher.propTypes = {
  themeProfile: PropTypes.oneOf(["theme1", "theme2", "custom"]),
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  children: PropTypes.node
};

export default ThemeSwitcher;
