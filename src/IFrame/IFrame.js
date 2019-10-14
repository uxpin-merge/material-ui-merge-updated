import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "../Card/Card";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import IFramePlayground from "docz-iframe-playground";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#eee',
  },
  uxpCanvas:{
    borderTop:"none !important"
  },
  frameStyle: {
    background: '#fff',
    border: '1px solid #e0e0e0',
    display: 'block',
    margin: '0 auto',
    overflow: 'auto',
    // height: 'fit-content',
  },
  deviceSelect:{
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
  canvasContainer:{
margin:"0 !important"
  }
});

class IFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: props.defaultView,
    };

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeSelect = event => {
    this.setState({ view: event.target.value})
  };

  handleChange(e) {
    this.setState({view: e.target.value});
  }

  


  render() {
    if (document.querySelector(".canvas-container")){
    const uxpContainer = document.querySelector(".canvas-container");
    uxpContainer.className = 'uxpCanvas';
  }

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
      <div className={classes.root}>

<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>


<Grid item>



<Select
        onChange={this.handleChangeSelect}
        value={this.state.view}
        disableUnderline
      >
        
          <MenuItem key="mobile" value="mobile"><Typography variant="caption">Mobile (375x667)</Typography> </MenuItem>
          <MenuItem key="tablet" value="tablet"><Typography variant="caption">Tablet (768x1024)</Typography></MenuItem>
          <MenuItem key="desktop" value="desktop"><Typography variant="caption">Desktop (1280x667)</Typography></MenuItem>
        </Select>
        </Grid>
        </Grid>
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
  menuItems: PropTypes.array,
};

IFrame.defaultProps = {
   responsive: true,
   defaultView: "desktop",
   menuItems: [
    { label: "Home", value: "1" },
    { label: "Mobile", value: "2" },
    { label: "Office", value: "3", hasDivider: "true" },
    { label: "Emergency", value: "4" }
  ],
 };

export default withStyles(styles)(IFrame);
