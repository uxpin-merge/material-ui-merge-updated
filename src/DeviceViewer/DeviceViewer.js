import React, { useState } from "react";
import PropTypes from "prop-types";
import IFrame from "../IFrame/IFrame";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%"
  },
  deviceSelect: {
    border: "none"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function DeviceViewer(props) {
  const classes = useStyles(props);

  // Declare a new state variable, which we'll call "count"
  const [frameWidth, setframeWidth] = React.useState(800);
  const [frameHeight, setframeHeight] = React.useState(800);
  const [deviceView, setdeviceView] = React.useState(props.defaultView);
  const [active, setActive] = React.useState(props.active);

  const inputLabel = React.useRef(null);

  React.useEffect(() => {
    switch (deviceView) {
      case "desktop":
        setframeWidth(1280);
        setframeHeight(667);
        return;
      case "tablet":
        setframeWidth(768);
        setframeHeight(1024);
        return;
      case "mobile":
        setframeWidth(375);
        setframeHeight(667);
        return;
      default:
        return;
    }
  }, [deviceView]);

  const handleChange = event => {
    setdeviceView(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.deviceToolbar}
      >
        <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Age
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={deviceView}
              onChange={handleChange}
              framewidth={frameWidth}
              frameheight={frameHeight}
            >
              <MenuItem value={"desktop"}>Desktop</MenuItem>
              <MenuItem value={"tablet"}>Tablet</MenuItem>
              <MenuItem value={"mobile"}>Mobile</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <IFrame active={active} frameWidth={frameWidth} frameHeight={frameHeight}>
        <div style={{ overflowX: "hidden" }}>{props.children}</div>
      </IFrame>
    </>
  );
}

DeviceViewer.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  defaultView: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  desktopOption: PropTypes.bool,
  tabletOption: PropTypes.bool,
  mobileOption: PropTypes.bool
};

DeviceViewer.defaultProps = {
  defaultView: "desktop",
  desktopOption: true,
  tabletOption: true,
  mobileOption: true,
  active: true
};

export default DeviceViewer;

// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import PropTypes from "prop-types";
// import React from "react";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import { withStyles } from "@material-ui/core/styles";
// import IFramePlayground from "docz-iframe-playground";
// import List from "@material-ui/core/CssBaseline";
// import Menu from "@material-ui/core/Menu";
// import Paper from "@material-ui/core/Paper";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import Button from "@material-ui/core/Button";
// import Backdrop from "@material-ui/core/Backdrop";
// import Popover from "@material-ui/core/Popover";
// import Modal from "@material-ui/core/Modal";
// import Popper from "@material-ui/core/Popper";
// import Tooltip from "@material-ui/core/Tooltip";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import IFrame from "../IFrame/IFrame";
// import Container from "@material-ui/core/Container"

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     background: "#eeeeee",
//     width: "100%",
//     height: "100%",
//     paddingBottom: "75px",
//     minHeight: "702px",
//     minWidth: "1280px"
//   },
//   uxpIglooCanvas: {
//     borderTop: "0 !important"
//   },
//   frameStyle: {
//     background: "#fff",
//     // border: "1px solid #e0e0e0",
//     display: "block",
//     margin: "0 auto",
//     overflow: "auto",
//     height: "fit-content"
//   },
//   deviceSelect: {
//     border: "none"
//   },
//   desktop: {
//     width: "1280px",
//     height: "100%"
//   },
//   tablet: {
//     width: "768px",
//     height: "1024px"
//   },
//   mobile: {
//     width: "375px",
//     height: "667px"
//   },
//   canvasContainer: {
//     margin: "0 !important"
//   },
//   fullHeightIframe: {
//     height: "auto !important"
//   },
//   deviceToolbar: {
//     minHeight: "35px"
//   },
//   iframeheight: {
//     height: "-webkit-fill-available !important"
//   }
// });

// class DeviceViewer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       view: props.defaultView,
//       iframeContained: false,
//       deviceSelect: true
//     };

//     this.handleChangeSelect = this.handleChangeSelect.bind(this);
//   }

//   handleChangeSelect = event => {
//     this.setState({ view: event.target.value });
//   };

//   handleChange(e) {
//     this.setState({ view: e.target.value });
//   }

//   componentDidMount() {
//     //If in UXP editor
//     if (document.querySelector("#simplified")) {
//       this.setState({
//         //Sets fixed height for devices in UXP preview
//         inUxpEditor: true
//       });
//     } else {
//       //Remove top margin of UXP Canvas
//       if (document.querySelector(".canvas-container")) {
//         const uxpContainer = document.querySelector(".canvas-container");
//         uxpContainer.style.marginTop = "0";
//       }
//     }

//     if (
//       props.desktopOption ||
//       props.tabletOption ||
//       props.mobileOption
//     ) {
//       this.setState({
//         deviceSelect: true
//       });
//     } else {
//       this.setState({
//         deviceSelect: false
//       });
//     }
//   }

//   render() {
//     let selectedViewClass = "";

//     if (this.state.view === "desktop") {
//       selectedViewClass = props.classes.desktop;
//     } else if (this.state.view === "tablet") {
//       selectedViewClass = props.classes.tablet;
//     } else {
//       selectedViewClass = props.classes.mobile;
//     }

//     let responsiveFrame = [
//       props.classes.frameStyle,
//       selectedViewClass,
//       this.state.inUxpEditor && props.classes.fullHeightIframe
//     ];

//     responsiveFrame = responsiveFrame.join(" ");

//     const { classes } = props;

//     const children = React.Children.map(props.children, child => {
//       return React.cloneElement(child, {
//         inIframe: true
//       });
//     });

//     return (
//       <>
//         <div className={classes.root}>
//         {props.active ?
//           <Grid
//             container
//             direction="row"
//             justify="center"
//             alignItems="center"
//             className={classes.deviceToolbar}
//           >
//             {this.state.deviceSelect && (
//               <Grid item>
//                 <Select
//                   onChange={this.handleChangeSelect}
//                   value={this.state.view}
//                   disableUnderline
//                 >
//                   {props.mobileOption && (
//                     <MenuItem key="mobile" value="mobile">
//                       <Typography variant="caption">
//                         Mobile (375x667)
//                       </Typography>{" "}
//                     </MenuItem>
//                   )}
//                   {props.tabletOption && (
//                     <MenuItem key="tablet" value="tablet">
//                       <Typography variant="caption">
//                         Tablet (768x1024)
//                       </Typography>
//                     </MenuItem>
//                   )}
//                   {props.desktopOption && (
//                     <MenuItem key="desktop" value="desktop">
//                       <Typography variant="caption">
//                         Desktop (1280x667)
//                       </Typography>
//                     </MenuItem>
//                   )}
//                 </Select>
//               </Grid>
//             )}
//           </Grid>
//           : null }

//           <div className={responsiveFrame} id="iframeContainer">
//           <IFrame className={classes.iframeheight} active={props.active} ><div style={{overflowX: "hidden"}}>{props.children}</div></IFrame>

//             {/* {props.active ? (

//               <IFrame className={classes.iframeheight} ><div style={{overflowX: "hidden"}}>{props.children}</div></IFrame>

//             ) : (
//               <div >
//                 <Container maxWidth="md">{props.children}</Container>
//               </div>
//             )} */}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
// DeviceViewer.propTypes = {
//   children: PropTypes.node,
//   active: PropTypes.bool,
//   defaultView: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
//   desktopOption: PropTypes.bool,
//   tabletOption: PropTypes.bool,
//   mobileOption: PropTypes.bool
// };

// DeviceViewer.defaultProps = {
//   defaultView: "desktop",
//   desktopOption: true,
//   tabletOption: true,
//   mobileOption: true,
//   active: true
// };

// export default withStyles(styles)(DeviceViewer);
