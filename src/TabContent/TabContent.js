import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const TabContent = (props) => {
    return(
    <Typography component="div" style={props.style}>
        {props.children}
    </Typography>);
}

TabContent.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
};

export default TabContent;