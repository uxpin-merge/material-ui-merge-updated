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
    background: "#eee"
  },
  uxpIglooCanvas: {
    borderTop: "0 !important"
  },
  frameStyle: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    display: "block",
    margin: "0 auto",
    overflow: "auto"
    // height: 'fit-content',
  },
  deviceSelect: {
    border: "none"
  },
  desktop: {
    width: "1280px",
    height: "667px",
    maxHeight: "667px"
  },
  tablet: {
    width: "768px",
    height: "1024px",
    maxHeight: "1024px"
  },
  mobile: {
    width: "375px",
    height: "667px",
    maxHeight: "667px"
  },
  canvasContainer: {
    margin: "0 !important"
  }
});

class DeviceViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: props.defaultView
    };

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeSelect = event => {
    this.setState({ view: event.target.value });
  };

  handleChange(e) {
    this.setState({ view: e.target.value });
  }

  render() {

    //Remove top margin of UXP Canvas 
    if (document.querySelector(".canvas-container")) {
      const uxpContainer = document.querySelector(".canvas-container");
      uxpContainer.style.marginTop = "0";
    }

    let selectedViewClass = "";

    if (this.state.view === "desktop") {
      selectedViewClass = this.props.classes.desktop;
    } else if (this.state.view === "tablet") {
      selectedViewClass = this.props.classes.tablet;
    } else {
      selectedViewClass = this.props.classes.mobile;
    }

    let responsiveFrame = [this.props.classes.frameStyle, selectedViewClass];

    responsiveFrame = responsiveFrame.join(" ");

    const { classes } = this.props;

    return (
      <>
      

      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Select
              onChange={this.handleChangeSelect}
              value={this.state.view}
              disableUnderline
            >
              <MenuItem key="mobile" value="mobile">
                <Typography variant="caption">Mobile (375x667)</Typography>{" "}
              </MenuItem>
              <MenuItem key="tablet" value="tablet">
                <Typography variant="caption">Tablet (768x1024)</Typography>
              </MenuItem>
              <MenuItem key="desktop" value="desktop">
                <Typography variant="caption">Desktop (1280x667)</Typography>
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
        <div className={responsiveFrame}>
        {/* <div id="Container"
 style={{paddingBottom: '56.25%', position: 'relative', display: 'block', width: '100%'}}>
   <IFramePlayground width="100%" height="100%" style={{position:'absolute', top:'0', left:'0'}}>{this.props.children}</IFramePlayground>
 
</div> */}
          <IFramePlayground>{this.props.children}</IFramePlayground>
        </div>
      </div>
      </>
    );
  }
}
DeviceViewer.propTypes = {
  children: PropTypes.node,
  responsive: PropTypes.bool,
  defaultView: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};

DeviceViewer.defaultProps = {
  responsive: true,
  defaultView: "desktop",
};

export default withStyles(styles)(DeviceViewer);
