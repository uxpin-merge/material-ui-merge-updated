
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "../Box/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
        {children}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any,
  value: PropTypes.any
};

function a11yProps(index) {
  return {
    id: `tabs-with-panel-${index}`,
    "aria-controls": `tab-panel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTab-wrapper": {
      alignItems: "flex-start",
      flexDirection: "row"
    },
    "& .MuiIcon-root": {
      marginBottom: 0,
      marginRight: theme.spacing(1)
    },
    "& .MuiTab-labelIcon": {
      minHeight: "0",
      paddingTop: "0"
  }
  },
  tab: {
    // color: "inherit",
    fontSize: "0.95rem",
    textTransform: "none",
    marginRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightRegular,
    minWidth: 100,
    "&:hover": {
      color: theme.palette.text.primary,
    },
    "&.Mui-selected:hover": {
      // color: "inherit",
    },
  },
  tabPanel:{
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
      paddingLeft: 0,
      paddingRight: 0
    },
  }
}));

export default function TabsWithPanel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(props.defaultValue);

  React.useEffect(() => setValue(props.defaultValue), [props.defaultValue]);


  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label={props.ariaLabel}
        className={classes.root}
        textColor="primary"
        indicatorColor="primary"
        variant={props.variant}
        centered={props.centered}
      >
        {props.tabs.map((item, index) => {
          return (
            <Tab
              label={item.label}
              key={index}
              {...(item.disabled && { disabled: true })}
              {...(item.icon && { icon: <Icon> {item.icon} </Icon> })}
              {...a11yProps(index)}
              // {...props}
              className={classes.tab}
            />
          );
        })}
      </Tabs>

      {React.Children.map(props.children, (child, index) => (
        <TabPanel value={value} index={index} dir={theme.direction} className={classes.tabPanel}>
          {React.cloneElement(child, { value: value })}
        </TabPanel>
      ))}
    </div>
  );
}
TabsWithPanel.propTypes = {
  /**
   * Array of tab labels and properties.
   * Use the following format:
   * [
      {
        "label": "Tab 1"
      },
      {
        "label": "Tab 2",
        "disabled": true
      },
      {
        "label": "Tab 3",
        "icon": "home"
      }
    ]
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      disabled: PropTypes.bool,
      icon: PropTypes.string
    })
  ),

  /**
   * Number of the tab that supposed to be active. Starts with 0.
   * @uxpinpropname  Active Tab
   */
  defaultValue: PropTypes.number,

  /**
   *  Determines additional display behavior of the Tabss:
   *  - `scrollable` will display scroll arrows if tabs do not fit the container
   *  - `fullWidth` will make the Tabs grow to use all the available space.
   *  - `standard` will render the default state.
   */
  variant: PropTypes.oneOf(["standard", "scrollable", "fullWidth"]),

  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  // children: PropTypes.node,

  /**
   * Determines the color of the `Tabs`.
   * @uxpinignoreprop
   */
  textColor: PropTypes.oneOf(["secondary", "primary", "inherit"]),

  /**
   * Determines the color of the indicator.
   * @uxpinignoreprop
   */
  // indicatorColor: PropTypes.oneOf(["secondary", "primary"]),

  /**
   * Determine behavior of scroll buttons when Tabss are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  /** @uxpinignoreprop */
  // scrollButtons: PropTypes.oneOf(["auto", "on", "off"])

  /**
  * If `true`, the Tabss will be centered.
  * This property is intended for large views.
  */
  centered: PropTypes.bool,
  /**
  * Aria-label tag for accessibility
  */
 ariaLabel: PropTypes.string,

};

TabsWithPanel.defaultProps = {
  tabs: [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }],
  defaultValue: 0,
  indicatorColor: "primary",
  textColor: "primary",
  variant: "standard",
  centered: false,
  scrollButtons: "auto",
  ariaLabel: "Tabs with panel"
};




// import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Box from "@material-ui/core/Box";
// import PropTypes from "prop-types";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div {...other}>
//       {value === index && <Box p={3}>{children}</Box>}
//     </div>
//   );
// }
// export default function TabsWithPanel(props) {
//   const [value, setValue] = React.useState(props.value);

//   React.useEffect(() => setValue(props.value), [props.value]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//     {/* <p>value: {props.value}</p> */}
//       <AppBar position="static">
//         <Tabs value={value} onChange={handleChange}>
//           <Tab label="Item One" />
//           <Tab label="Item Two" />
//           <Tab label="Item Three" />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </>
//   );
// }

// TabsWithPanel.propTypes = {
//   /**
//    * The value of the initially selected radio button.
//    * @uxpinbind onChange 1
//    */
//   value: PropTypes.number,

//   /**
//   * The value of the initially selected radio button.
//   */
//   // activeTab: PropTypes.number,


//   /**
//   * Change event to use with UXPin interactions.
//   */
//   onChange: PropTypes.func,
// };

// TabsWithPanel.defaultProps = {
//   value: 0,
//   onChange: () => undefined,
// };

