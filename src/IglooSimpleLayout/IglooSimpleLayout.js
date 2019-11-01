import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IglooSideNavigation from '../IglooSideNavigation/IglooSideNavigation'
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import IglooHeader from '../IglooHeader/IglooHeader'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '667px',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

function IglooSimpleLayout(props) {

  const classes = useStyles();


return (
    <div className={classes.root}>  
      <IglooHeader {...props}/>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {(props.desktopNavigationVariant=="horizontal") && (
          <Hidden smDown implementation="css">
          <div className={classes.toolbar} />
          </Hidden>
        )}
        {props.children}
      </div>
    </div>
  );
}
IglooSimpleLayout.propTypes = {
  children: PropTypes.node,
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
  hasAccountIcon: PropTypes.bool,
  accountMenu: PropTypes.array,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  /**
  * The type of navigation to render at desktop breakpoint
  * `horizontal` Horizontal tab navigation 
  * (only 1 level supported)
  * `vertical` will never present them
  */
  desktopNavigationVariant: PropTypes.oneOf(['horizontal', 'vertical']),
};
IglooSimpleLayout.defaultProps = {
  menus: [
    {
      label: 'Marketing',
      children: [
        {
          label: 'Branding',
          children: [
            {
              label: 'Brochures',
            },
            {
              label: 'Business Cards',
            },
            {
              label: 'Logos',
            },
          ],
        },
        {
          label: 'Variable Printing',
          children: [
            {
              label: 'Igen',
            },
            {
              label: '1-to-1',
            },
          ],
        },
        {
          label: 'Loyalty',
        },
        {
          label: 'Social Media',
        },
      ],
    },
    { label: 'Data Solutions', icon: 'data_usage' },
    { label: 'Technology', icon: 'widgets' },
    { label: 'from layout', icon: 'bookmark' },
  ],
  hasAccountIcon: true,
  accountMenu: [
    { label: "Favorites", icon: "favorite" },
    { label: "Orders", icon: "receipt", hasDivider: "true" },
    { label: "Logout" }
  ],
  logoSrc: "https://uc.uxpin.com/files/732773/730600/image-6d6f68.png",
  logoAlt: "IGLOO Design System",
  desktopNavigationVariant:"vertical",
};
export default IglooSimpleLayout;
