import React from "react";
import PropTypes from "prop-types";
import {
  MuiThemeProvider,
  createMuiTheme,
  useTheme,
} from "@material-ui/core/styles";
import igloo from "./themes/igloo";

import theme2 from "./themes/theme2";
import theme1 from "./themes/theme1";
import gallo from "./themes/gallo";
import _ from "lodash";

function ThemeSwitcher(props) {
  let selectedTheme = useTheme();
  console.log("selected theme: ", selectedTheme);

  function makeCustomTheme() {
    const customTheme = createMuiTheme({
      ...selectedTheme,
      palette: {
        primary: {
          main: props.primaryColor
            ? props.primaryColor
            : selectedTheme.palette.primary.main,
        },
        secondary: {
          main: props.secondaryColor
            ? props.secondaryColor
            : selectedTheme.palette.secondary.main,
        },
        decoration: {
          main: props.decorationColor
            ? props.decorationColor
            : selectedTheme.palette.decoration.main,
        },
        headerBadges: {
          main: props.headerBadgesColor
            ? props.headerBadgesColor
            : selectedTheme.palette.headerBadges.main,
        },
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
        selectedTheme = _.merge({}, igloo, theme2);
        break;
      case "gallo":
        selectedTheme = _.merge({}, igloo, gallo);
        break;
      case "custom":
        selectedTheme = makeCustomTheme();
        break;
      default:
        selectedTheme = selectedTheme;
    }
    console.log(selectedTheme)
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
}

ThemeSwitcher.propTypes = {
  themeProfile: PropTypes.oneOf(["theme1", "theme2", "gallo", "custom"]),
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  decorationColor: PropTypes.string,
  headerBadgesColor: PropTypes.string,
  children: PropTypes.node,
};

export default ThemeSwitcher;
