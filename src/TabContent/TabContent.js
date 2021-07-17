import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const TabContent = (props) => {
    return(
    <Typography component="div" style={{padding: "24px", paddingTop:"8px"}}>
        {props.children}
    </Typography>);
}

TabContent.propTypes = {
    children: PropTypes.node,
  /**
  * @uxpinignoreprop
  */
    style: PropTypes.object
};

export default TabContent;