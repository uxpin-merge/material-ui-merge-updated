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
import Badge from '@material-ui/core/Badge';
import IglooHeader from '../IglooHeader/IglooHeader'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '667px',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function IglooSimpleLayout(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

return (
    <div className={classes.root}>  
      <IglooHeader/>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </div>
    </div>
  );
}
IglooSimpleLayout.propTypes = {
  children: PropTypes.node,
};
export default IglooSimpleLayout;
