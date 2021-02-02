import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "../Box/Box";
import TabContent from '../TabContent/TabContent';
import { values } from "lodash";

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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
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
    fontSize: "0.95rem",
    textTransform: "none",
    marginRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightRegular,
    minWidth: 100,
    "&:hover": {
      // color: theme.palette.secondary.dark,
    },
    "&.Mui-selected:hover": {
      // color: "inherit",
    }
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

  function handleChange(event, newValue) {
    setValue(newValue);
    alert(newValue);
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="full width tabs example"
        {...props}
        className={classes.root}
      >
        {props.tabs.map((item, index) => {
          return (
            <Tab
              label={item.label}
              key={index}
              textColor="primary"
              indicatorColor="primary"
              {...(item.disabled && { disabled: true })}
              {...(item.icon && { icon: <Icon> {item.icon} </Icon> })}
              {...a11yProps(index)}
              {...props}
              className={classes.tab}
              value={item.value}
            />
          );
        })}
      </Tabs>

      {/* {React.Children.map(props.children, (child, index) => (
        <TabPanel value={value} index={index} dir={theme.direction} className={classes.tabPanel}>
          {React.cloneElement(child, { value: value })}
        </TabPanel>
      ))} */}

<TabPanel value={value} className={classes.tabPanel}>
    <TabContent  value={0} dir="x">Tab Content 1</TabContent>
    <TabContent  value={1} dir="x">Tab Content 2</TabContent>
    <TabContent  value={2} dir="x">Tab Content 3</TabContent>
    </TabPanel>

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
   * Number of the tab that supposed to be active. Starts with 0.
   */
  value: PropTypes.number,


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
  children: PropTypes.node,

  /**
   * Determines the color of the `Tabs`.
   * @uxpinignoreprop
   */
  textColor: PropTypes.oneOf(["secondary", "primary", "inherit"]),

  /**
   * Determines the color of the indicator.
   * @uxpinignoreprop
   */
  indicatorColor: PropTypes.oneOf(["secondary", "primary"]),

  /**
   * Determine behavior of scroll buttons when Tabss are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  /** @uxpinignoreprop */
  scrollButtons: PropTypes.oneOf(["auto", "on", "off"])
};

TabsWithPanel.defaultProps = {
  tabs: [{ label: "Tab 1222", value:0 }, { label: "Tab 2", value:1 }, { label: "Tab 3", value:2 }],
  defaultValue: 0,
  value: 0,
  indicatorColor: "primary",
  textColor: "primary",
  variant: "standard",
  scrollButtons: "auto"
  
};
