import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}));

export default function IglooTopNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {props.menus.map(menus => (
          <>
            {/* {menus.active == true ? handleActive("3") : null} */}

            <Tab label={menus.label} />
          </>
        ))}
        {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} /> */}
      </Tabs>
    </div>
  );
}
IglooTopNavigation.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      active: PropTypes.bool,
      submenu: PropTypes.arrayOf(PropTypes.shape({}))
    })
  )
};

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/styles";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Drawer from "@material-ui/core/Drawer";
// import Divider from "@material-ui/core/Divider";
// import Collapse from "@material-ui/core/Collapse";
// import Toolbar from "@material-ui/core/Toolbar";
// import Grid from "@material-ui/core/Grid";
// import Slide from "@material-ui/core/Slide";
// import InputBase from "@material-ui/core/InputBase";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/icon";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import Image from "../Image/Image";

// const useStyles = makeStyles(theme => ({
//   root: {
//     // backgroundColor: "rgba(244, 246, 250, 0.5)",
//   },

//   listItem: {
//     "&.Mui-selected": {
//       borderLeft: "3px solid",
//       borderLeftColor: theme.palette.decoration.main,
//       backgroundColor: "transparent"
//     }
//   },

//   icon: {
//     marginLeft: "-8px",
//     marginRight: "16px"
//   },
//   listItemText: {
//     letterSpacing: "1px",
//     fontWeight: 500
//   },
//   subList: {
//     backgroundColor: "#ffffff",
//     "& .MuiButtonBase-root": {
//       color: "#5f6368"
//     },
//     // borderBottom: "#e8e8e8 1px solid",
//     "&.withIcon .MuiButtonBase-root": {
//       paddingLeft: "36px"
//     },
//     "&.MuiList-root": {
//       borderBottom: "#e8e8e8 1px solid"
//     },
//     "& .MuiListItem-root": {
//       paddingTop: "4px",
//       paddingBottom: "4px"
//     }
//   },
//   rootLevel: {
//     "&.Mui-selected": {
//       backgroundColor: "transparent",
//       borderBottom: "#e8e8e8 4px solid",
//       borderLeft: "none"
//     }
//   },

//   subLevel: {
//     "&.Mui-selected": {
//       backgroundColor: "transparent",
//       borderBottom: "green 4px solid"
//     }
//   },
//   collapsedLevel0: {
//     // borderBottom: "#e8e8e8 4px solid"
//   },
//   collapsedLevel1: {
//     "& .MuiTypography-root": {
//       fontWeight: "bold"
//     }
//   }
// }));
// function IglooTopNavigation(props) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         variant="scrollable"
//         scrollButtons="auto"
//         aria-label="scrollable auto tabs example"
//       >
//         {props.menus.map(menus => (
//           <Tab label={menus.label} fullWidth selected={true}/>
//         ))}
//       </Tabs>
//     </div>
//   );
// }

// IglooTopNavigation.propTypes = {
//   menus: PropTypes.arrayOf(
//     PropTypes.shape({
//       icon: PropTypes.string,
//       label: PropTypes.string,
//       active: PropTypes.bool,
//       submenu: PropTypes.arrayOf(PropTypes.shape({}))
//     })
//   )
// };
// // IglooSideNavigation.defaultProps = {
// //   menus: [
// //     {
// //       label: "Marketing Services",
// //       active: true,
// //       opened: true,
// //       submenu: [
// //         {
// //           label: "Branding",
// //           submenu: [
// //             {
// //               label: "Brochures",
// //               active: true
// //             },
// //             {
// //               label: "Business Cards"
// //             },
// //             {
// //               label: "Logos"
// //             }
// //           ]
// //         },
// //         {
// //           label: "Variable Printing",
// //           submenu: [
// //             {
// //               label: "Igen"
// //             },
// //             {
// //               label: "1-to-1"
// //             }
// //           ]
// //         },
// //         {
// //           label: "Loyalty",
// //           active: "true"
// //         },
// //         {
// //           label: "Social Media"
// //         }
// //       ]
// //     },
// //     { label: "Data Solutions", icon: "data_usage", active: true },
// //     { label: "Technology", icon: "widgets" },
// //     { label: "From Side", icon: "bookmark" }
// //   ]
// // };

// export default IglooTopNavigation;
