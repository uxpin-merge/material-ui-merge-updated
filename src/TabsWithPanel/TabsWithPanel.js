import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
      <Box p={3}>{children}</Box>
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
    // display: 'flex',
  }
}));

export default function TabsWithPanel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(props.defaultValue);

  function handleChange(event, newValue) {
    setValue(newValue);
  }


  return (
    <div className={classes.root}>

      
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="full width tabs example"
          {...props}
        >

            {props.tabs.map((item, index) => {
                return (
                    <Tab
                        label={item.label}
                        key={index}
                        {...item.disabled && {'disabled' : true}}
                        {...item.icon && {'icon' : <Icon> {item.icon} </Icon>}}
                        {...a11yProps(index)}
                        {...props}
                    />
                );
            })}

        </Tabs>
      
      {React.Children.map(
        props.children,
        (child, index) => (
          <TabPanel value={value} index={index} dir={theme.direction}>
            {React.cloneElement(child, { value: value })}
          </TabPanel>
        )
      )}

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
  tabs: PropTypes.arrayOf(PropTypes.shape(
    {
      label: PropTypes.string,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
  })),


  /**
   *  Determines additional display behavior of the Tabss:
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the Tabs bar.
   *  -`fullWidth` will make the Tabss grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),

  /**
   * The content of the component.
   */
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /**
   * Determines the color of the `Tabs`.
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),


  /**
   * Determine behavior of scroll buttons when Tabss are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  /** @uxpinignoreprop */
  scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),


  /**
   * Number of the tab that supposed to be active initially. Starts with  0 for the first tab.
   */
  defaultValue: PropTypes.number,


  
};

TabsWithPanel.defaultProps = {
  tabs:[{label: "Tab 1222"}, {label: "Tab 2"}, {label: "Tab 3"}],
  defaultValue: 0,
  indicatorColor: "primary",
  textColor:"primary",
  variant:"standard",
  scrollButtons:"auto"
};