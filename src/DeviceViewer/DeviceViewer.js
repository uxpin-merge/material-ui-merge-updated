import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import IFramePlayground from "docz-iframe-playground";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "#eeeeee",
    width: "100%",
    height: "100%",
    paddingBottom: "35px"
  },
  uxpIglooCanvas: {
    borderTop: "0 !important"
  },
  frameStyle: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    display: "block",
    margin: "0 auto",
    overflow: "auto",
    height: "fit-content"
  },
  deviceSelect: {
    border: "none"
  },
  desktop: {
    width: "1280px",
    height: "100%"
  },
  tablet: {
    width: "768px",
    height: "1024px"
  },
  mobile: {
    width: "375px",
    height: "667px"
  },
  canvasContainer: {
    margin: "0 !important"
  },
  fullHeightIframe: {
    height: "auto !important"
  },
  deviceToolbar: {
    minHeight: "35px"
  },
  iframeheight:{
    height: "-webkit-fill-available !important"
  }
});

class DeviceViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: props.defaultView,
      iframeContained: false,
      deviceSelect: true
    };

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeSelect = event => {
    this.setState({ view: event.target.value });
  };

  handleChange(e) {
    this.setState({ view: e.target.value });
  }

  componentDidMount() {
    //If in UXP editor
    if (document.querySelector("#simplified")) {
      this.setState({
        //Sets fixed height for devices in UXP preview
        inUxpEditor: true
      });
    } else {
      //Remove top margin of UXP Canvas
      if (document.querySelector(".canvas-container")) {
        const uxpContainer = document.querySelector(".canvas-container");
        uxpContainer.style.marginTop = "0";
      }
    }

    //Remove extra white space from iframe
    // if (document.querySelector("#iframeContainer")) {
    //   const Iframe = document.querySelector("#iframeContainer iframe");
    //   Iframe.classList.add("DeviceViewer-iframeheight-11", "jss11");
    // }
    

    if (
      this.props.desktopOption ||
      this.props.tabletOption ||
      this.props.mobileOption
    ) {
      this.setState({
        deviceSelect: true
      });
    } else {
      this.setState({
        deviceSelect: false
      });
    }
  }

  render() {
    let selectedViewClass = "";

    if (this.state.view === "desktop") {
      selectedViewClass = this.props.classes.desktop;
    } else if (this.state.view === "tablet") {
      selectedViewClass = this.props.classes.tablet;
    } else {
      selectedViewClass = this.props.classes.mobile;
    }

    let responsiveFrame = [
      this.props.classes.frameStyle,
      selectedViewClass,
      this.state.inUxpEditor && this.props.classes.fullHeightIframe
    ];

    responsiveFrame = responsiveFrame.join(" ");

    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.deviceToolbar}
          >
            {this.state.deviceSelect && (
              <Grid item>
                <Select
                  onChange={this.handleChangeSelect}
                  value={this.state.view}
                  disableUnderline
                >
                  {this.props.mobileOption && (
                    <MenuItem key="mobile" value="mobile">
                      <Typography variant="caption">
                        Mobile (375x667)
                      </Typography>{" "}
                    </MenuItem>
                  )}
                  {this.props.tabletOption && (
                    <MenuItem key="tablet" value="tablet">
                      <Typography variant="caption">
                        Tablet (768x1024)
                      </Typography>
                    </MenuItem>
                  )}
                  {this.props.desktopOption && (
                    <MenuItem key="desktop" value="desktop">
                      <Typography variant="caption">
                        Desktop (1280x667)
                      </Typography>
                    </MenuItem>
                  )}
                </Select>
              </Grid>
            )}
          </Grid>

          <div className={responsiveFrame} id="iframeContainer">
            <IFramePlayground>
              {this.props.children}
            </IFramePlayground>
          </div>
        </div>
      </>
    );
  }
}
DeviceViewer.propTypes = {
  children: PropTypes.node,
  defaultView: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  desktopOption: PropTypes.bool,
  tabletOption: PropTypes.bool,
  mobileOption: PropTypes.bool
};

DeviceViewer.defaultProps = {
  defaultView: "desktop",
  desktopOption: true,
  tabletOption: true,
  mobileOption: true
};

export default withStyles(styles)(DeviceViewer);
