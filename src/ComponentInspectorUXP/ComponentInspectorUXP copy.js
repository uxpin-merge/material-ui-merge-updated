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

const styles = theme => ({
  selector: {
    alignSelf: "center",
    boxShadow: "none"
  },
  responsiveContainer: {
    margin: theme.spacing.unit * 3
  },
  desktop: {
    width: "1024px",
    maxHeight: "667px"
  },
  tablet: {
    width: "768px",
    maxHeight: "1024px"
  },
  mobile: {
    width: "375px",
    maxHeight: "667px"
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
  }
});

class ComponentInspector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "desktop",
      showCode: false,
      tabValue: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }

  handleChange = (e, value) => this.setState({ view: value });

  handleCodeChange = (e, value) => {
    this.state.showCode === true
      ? this.setState({ showCode: false })
      : this.setState({ showCode: true });
  };

  handleTabChange = (event, value) => {
    this.setState({ tabValue: value });
  };

  render() {
    let selectedViewClass = "";

    if (this.state.view === "desktop") {
      selectedViewClass = this.props.classes.desktop;
    } else if (this.state.view === "tablet") {
      selectedViewClass = this.props.classes.tablet;
    } else {
      selectedViewClass = this.props.classes.mobile;
    }

    let responsiveContainer = [
      this.props.classes.responsiveContainer,
      selectedViewClass
    ];

    responsiveContainer = responsiveContainer.join(" ");

    const { classes } = this.props;

    return (
      <div>
        <Toolbar className={classes.inspectorToolbar} variant="dense">
          <Grid container spacing={0} alignItems="center">
            <Grid item xs>
              <Typography variant="h6">{this.props.title}</Typography>
              <Typography variant="caption">Component: {this.props.componentName}</Typography>
            </Grid>
            <Grid item>
              {this.props.responsive && (
                <React.Fragment>
                  <IconButton
                    size="small"
                    onClick={() => this.setState({ view: "mobile" })}
                  >
                    <Icon fontSize="small">phone_iphone</Icon>
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => this.setState({ view: "tablet" })}
                  >
                    <Icon fontSize="small">tablet_mac</Icon>
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => this.setState({ view: "desktop" })}
                  >
                    <Icon fontSize="small">desktop_mac</Icon>
                  </IconButton>
                </React.Fragment>
              )}
              <IconButton size="small" onClick={this.handleCodeChange}>
                <Icon fontSize="small">code</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>

        <Paper className={classes.inspectorContainer} square elevation={0}>
          {this.state.showCode ? (
            <Paper elevation={0} square>
              <Tabs
                defaultValue={0}
                value={this.state.tabValue}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleTabChange}
              >
                <Tab label="JSX" />
                <Tab label="HTML/CSS" />
                <Tab label="Props" />
              </Tabs>
              {this.state.tabValue === 0 && (
                <Typography component="div" className={classes.codeWindow}>
                  <pre className={classes.pre}>
                    <code>{this.props.jsxCode}</code>
                  </pre>
                </Typography>
              )}
              {this.state.tabValue === 1 && (
                <Typography component="div" className={classes.codeWindow}>
                  <pre className={classes.pre}>
                    <code>{this.props.cssHtmlCode}</code>
                  </pre>
                </Typography>
              )}
              {this.state.tabValue === 2 && (
                <Typography component="div" className={classes.codeWindow}>
                  <pre className={classes.pre}>
                    <code>{this.props.propsCode}</code>
                  </pre>
                </Typography>
              )}
            </Paper>
          ) : null}

          <Grid container>
            <Grid item>
              <Paper square elevation="0" className={responsiveContainer}>
                {this.props.children}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
ComponentInspector.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  responsive: PropTypes.bool,
  classes: PropTypes.object,
  jsxCode: PropTypes.node,
  cssHtmlCode: PropTypes.node,
  propsCode: PropTypes.node,
  componentName: PropTypes.string,
};

ComponentInspector.defaultProps = {
   responsive: true,
   jsxCode: "Coming soon...",
   cssHtmlCode: "Coming soon...",
   propsCode: "Coming soon...",
 };

export default withStyles(styles)(ComponentInspector);
