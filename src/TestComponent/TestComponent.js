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

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function SimpleSelect(props) {
//   const classes = useStyles();
//   const [age, setAge] = React.useState('');
//   const [anchorTop, setAnchorTop] = React.useState('');
//   const [anchorLeft, setAnchorLeft] = React.useState('');

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

//   const handleChange = event => {
//     setAge(event.target.value);
//     setAnchorTop(event.target.getBoundingClientRect().top);
//     setAnchorLeft(event.target.getBoundingClientRect().left);
//   };



//   return (
//     <div>
     
//       <FormControl variant="outlined" className={classes.formControl} >
//         <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
//           Age
//         </InputLabel>
//         <Select
//           labelId="demo-simple-select-outlined-label"
//           id="demo-simple-select-outlined"
//           value={age}
//           onChange={handleChange}
//           labelWidth={labelWidth}
//           anchorPosition={{ left: anchorLeft, top: anchorTop }}
//          anchorReference="anchorPosition"
//          disablePortal={true}
         
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//       top:{anchorTop} left:{anchorLeft}
//     </div>
//   );
// }
