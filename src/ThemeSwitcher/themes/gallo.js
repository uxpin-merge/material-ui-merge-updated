import { createMuiTheme } from "@material-ui/core/styles";
import igloo from "./igloo";

const gallo = {
  palette: {
    primary: {
      main: "#917029",
      light: "#c5fa5c",
      dark: "#578104",
      contrastText: "#000000"
    },
    text: {
      primary: "#D0021B",
      secondary: "​​​​​​​#578104",
      }
  },
  overrides: {
    MuiTabs: {
      root: {
        width: "100%",
        borderRadius: "8px",
        background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
        padding: 10,
        boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
      },
      indicator: {
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, .2)",
        borderRadius: "16px",
      },
    },
    MuiTab: {
      root: {
        textTransform: "initial",
        margin: "0 16px",
        minWidth: 0,
      },
      wrapper: {
        color: "#ffffff",
        textTransform: "uppercase",
      },
    },
  },
};

// const gallo = createMuiTheme({
//   ...igloo,
//   palette: {
//     ...igloo.palette,
//     primary: {
//       main: "#917029",
//       contrastText: "#ffffff",
//     },
//     secondary: {
//       main: "#89713C",
//     },
//     decoration: {
//       main: "green",
//     },
//     text: {
//       primary: "#D0021B",
//       secondary: "​​​​​​​#ffffff"
//     },
//   },
//   overrides: {
//     // Name of the component
//     MuiTabs: {
//       root: {
//         width: "100%",
//         borderRadius: "8px",
//         background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
//         padding: 10,
//         boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
//       },
//       indicator: {
//         height: "100%",
//         backgroundColor: "rgba(255, 255, 255, .2)",
//         borderRadius: "16px",
//       },
//     },
//     MuiTab: {
//       root: {
//         textTransform: "initial",
//         margin: "0 16px",
//         minWidth: 0,
//       },
//       wrapper: {
//         color: "#ffffff",
//         textTransform: "uppercase",
//       },
//     },
//   },
// });

export default gallo;
