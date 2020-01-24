import { createMuiTheme } from "@material-ui/core/styles";
import igloo from "./igloo";

const theme2 = createMuiTheme({
  ...igloo,
  palette: {
    primary: {
      main: "#cccccc"
    }
  },
  overrides: {
    // Name of the component
    MuiTabs: {
      root: {
        width: "100%"
      },
      indicator: {
        display: "none"
      },
      centered: {
        alignItems: "center",
        justifyContent: "center"
      },
    },
    MuiTab: {
      root: {
        position: "relative",
        display: "block",
        borderRadius: "30px",
        textAlign: "center",
        transition: "all .5s",
        padding: "10px 15px",
        color: "#555555",
        height: "auto",
        opacity: "1",
        margin: "10px 0",
        float: "none",
        "& + button": {
          margin: "10px 0"
        },
        "&$selected": {
          "&, &:hover": {
            color: "#FFFFFF !important",
            backgroundColor: "#00acc1",
            boxShadow: "0 7px 10px -5px rgba(76, 175, 80, 0.4)"
          }
        }
      },
      wrapper: {
        lineHeight: "24px",
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: "500",
        position: "relative",
        display: "block",
        color: "inherit"
      }
    }
  }
});

export default theme2;
