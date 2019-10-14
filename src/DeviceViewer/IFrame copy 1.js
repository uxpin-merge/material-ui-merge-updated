/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import IFramePlayground from "docz-iframe-playground";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { fade, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, useTheme } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Frame from 'react-frame';

const useStyles = makeStyles(theme => ({
  iframeWidth: {
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
      width: theme.breakpoints.values.xs,
      border: '#000 1px solid'
    },
    [theme.breakpoints.up('md')]: {
      width: theme.breakpoints.values.md,
      border: 'red 1px solid'
    },
    
    
    
  },
  iframeContainer: {
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative'
  },

  mainIframe: {
     border: 'red 1px solid',
     height: '100%',
     left: '0',
     position: 'absolute',
     top: '0',
     width: '100%'
  }
  
}));

function IFrame(props) {
  const [responsiveWidth, setResponsiveWidth] = useState(300);
  const classes = useStyles();
  const theme = useTheme();
  console.log("theme", theme.breakpoints.values.lg);

  const handleSizeChange = event => {
    alert(event.currentTarget.value);
  };
  
  return (
    <>



<div className={classes.iframeContainer}>
    <IFramePlayground className={classes.mainIframe} frameborder="0">{props.children}</IFramePlayground>
  </div>


    {/* <div> */}
      
      {/* <h2>You clicked {responsiveWidth} times!</h2> */}
      {/* <button onClick={() => setResponsiveWidth(theme.breakpoints.values.xs)}>Decrement</button> */}
      {/* <button onClick={() => setResponsiveWidth(props.breakpoints.values.md)}>Increment</button> */}
    {/* </div> */}
    
      <Toolbar  variant="dense">
        <Grid container spacing={0} alignItems="center">
          <Grid item>
            
              
                <IconButton
                  size="small"
                  onClick={() => setResponsiveWidth()}
                  onClick={handleSizeChange}
                  value="xs"
                >
                  <Icon fontSize="small">phone_iphone</Icon>
                </IconButton>
                <IconButton
                  size="small"
                  // onClick={() => this.setState({ view: "tablet" })}
                >
                  <Icon fontSize="small">tablet_mac</Icon>
                </IconButton>
                <IconButton
                  size="small"
                  // onClick={() => this.setState({ view: "desktop" })}
                >
                  <Icon fontSize="small">desktop_mac</Icon>
                </IconButton>
              
          
            
          </Grid>
        </Grid>
      </Toolbar>
      <Grid container >
        <Grid item>
       
      {/* <IFramePlayground enableResizing>{props.children}</IFramePlayground> */}
      
      </Grid></Grid>
      
      {/* <IFramePlayground enableResizing>hhh</IFramePlayground> */}
    </>
  );
}

IFrame.propTypes = {
  /**
   * The name of the icon  font ligature.
   */
  children: PropTypes.node,

};

export default IFrame;
