import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    borderLeft: "#eeeeee 1px solid",
    minHeight: "667px",
    
  },
  toolbar: theme.mixins.toolbar,
  toolbarMargin:{
    borderTop: "#ffffff 3px solid"
  },
  content: {
    flexGrow: 1,
    background: "#FAFBFC",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
    
  },
}));

function MergeMainContent(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
}
MergeMainContent.propTypes = {
  children: PropTypes.node,
};

export default MergeMainContent;
