import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    // background: "#eeeeee",
    // width: "100%",
    // height: "100%",
    // paddingBottom: "35px",
    // minHeight: "702px",
    // minWidth: "1280px"
  },

}));

export default function TestComponent(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorTop, setAnchorTop] = React.useState(100);
  const [anchorLeft, setAnchorLeft] = React.useState(100);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setAnchorTop(event.target.getBoundingClientRect().top);
    setAnchorLeft(event.target.getBoundingClientRect().left);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              // keepMounted={true}
              // disablePortal={true}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorPosition={{ left: anchorLeft, top: anchorTop }}
              anchorReference="anchorPosition"
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            top:{anchorTop} left:{anchorLeft}
    </div>
  );
}
