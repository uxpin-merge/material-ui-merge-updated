import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "../Card/Card";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IFramePlayground from "docz-iframe-playground";

const styles = theme => ({
  selector: {
    alignSelf: "center",
    boxShadow: "none"
  },
  responsiveContainer: {
    margin: theme.spacing.unit * 3
  },
  
  inspectorContainer: {
    margin: theme.spacing.unit,
    border: "1px dashed rgba(0, 0, 0, 0.12)",
    marginBottom: "50px",
    overflow: "auto"
  },
  inspectorToolbar: {
    marginBottom: "none"
  },
  codeWindow: {
    padding: theme.spacing.unit * 2,
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    overflowY: "scroll",
    maxHeight: "400px",
    backgroundColor: "#f9f9f9"
  },
  pre: {
    whiteSpace: "pre-wrap"
  },
  desktop: {
    width: "1024px",
    height: "667px",
    maxHeight: "667px"
  },
  tablet: {
    width: "768px",
    height: "1024px"
  },
  mobile: {
    width: "375px",
    height: "667px"
  },


  iframeContainer: {
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
    right: 0,
    background: '#eee',
    padding: '1em',
    zIndex: 999,
    height: 'fit-content',

  },

  frameStyle: {
    background: '#fff',
    border: '1px solid #e0e0e0',
    display: 'block',
    margin: '0 auto',
    overflow: 'auto',
  }

});

class IFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: props.defaultView,
    };

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
      selectedViewClass
    ];

    responsiveFrame = responsiveFrame.join(" ");

    const { classes } = this.props;

    return (
      <div>
        {/* <Grid container>
        
        <div id="jack" className={responsiveFrame}>
        {this.state.view}<br/>
        
        </div>
        </Grid> */}
        
        <Toolbar  variant="dense">
          <Grid container spacing={0} alignItems="center">
            <Grid item>
              {this.props.responsive && (
                <React.Fragment>
                  <IconButton
                    onClick={() => this.setState({ view: "mobile" })}
                  >
                    <Icon fontSize="small">phone_iphone</Icon>
                  </IconButton>
                  <IconButton
                    onClick={() => this.setState({ view: "tablet" })}
                  >
                    <Icon fontSize="small">tablet_mac</Icon>
                  </IconButton>
                  <IconButton
                    onClick={() => this.setState({ view: "desktop" })}
                  >
                    <Icon fontSize="small">desktop_mac</Icon>
                  </IconButton>
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </Toolbar>
        <div className={responsiveFrame}>
          <IFramePlayground >
            {this.props.children}
          </IFramePlayground>
        </div>

        
      </div>
    );
  }
}
IFrame.propTypes = {
  children: PropTypes.node,
  responsive: PropTypes.bool,
  defaultView: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};

IFrame.defaultProps = {
   responsive: true,
   defaultView: "desktop"
 };

export default withStyles(styles)(IFrame);
