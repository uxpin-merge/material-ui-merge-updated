import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Image from '../Image/Image';


const useStyles = makeStyles(({ transitions, palette, spacing }) => ({
  appBarBg: {
    zIndex: 1098,
  },
  searchBox: ({ trigger }) => ({
    transition: transitions.create('top', {
      easing: transitions.easing.sharp,
    }),
    top: trigger ? 0 : 56,
    zIndex: 1099,
  }),
  searchInput: {
    color: palette.common.white,
    margin: spacing(1),
    padding: spacing(1),
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  listItemText: {
    letterSpacing: '1px',
    fontWeight: 500,
  },
  subList: {
    backgroundColor: '#f8f8f8',
  },
  logo:{
    height: '48px',
    maxWidth: '175px'

  }
}));

const IglooSmallHeader = ({ menus, ...props }) => {
  const trigger = useScrollTrigger();
  const classes = useStyles({ trigger });
  const [opened, setOpened] = useState(false);
  const [collapsedIndex, setCollapsedIndex] = useState([null, null, null]);
  const updateByIndex = (val, level) => {
    setCollapsedIndex(
      collapsedIndex.map((item, i) => (i === level ? val : item)),
    );
  };
  // eslint-disable-next-line react/prop-types
  const renderItem = (level = 0) => ({ icon, label, children }, index) => {
    const collapsed = collapsedIndex[level];
    const listItemText = (
      <ListItemText
        key={label}
        style={{
          paddingLeft: (level - 1) * 20 + (level === 0 ? 0 : 28),
          marginLeft: level === 0 && !icon ? 28 : 0,
        }}
        classes={{ primary: classes.listItemText }}
        primary={label}
      />
    );
    if (!children) {
      return (
        <>
          <ListItem button key={label}>
            {icon && (
              <Icon size={'small'} push={'right'}>
                {icon}
              </Icon>
            )}
            {listItemText}
          </ListItem>
          {level === 0 && <Divider light />}
        </>
      );
    }
    return (
      <>
        <ListItem
          button
          onClick={() =>
            updateByIndex(collapsed === index ? null : index, level)
          }
        >
          {icon && (
            <Icon size={'small'} push={'right'}>
              {icon}
            </Icon>
          )}
          {listItemText}
          {collapsedIndex[level] === index ? (
            <Icon>expand_less</Icon>
          ) : (
            <Icon>expand_more</Icon>
          )}
        </ListItem>
        <Collapse
          in={collapsedIndex[level] === index}
          timeout="auto"
          unmountOnExit
        >
          <List className={classes.subList} component="div" disablePadding>
            {children.map(renderItem(level + 1))}
          </List>
        </Collapse>
        {level === 0 && <Divider light />}
      </>
    );
  };
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={1} color="inherit">
          <Toolbar disableGutters>
            <Grid container spacing={1} alignItems={'center'}>
              <Grid item>
                <IconButton onClick={() => setOpened(true)}>
                <Icon
                  
                >menu</Icon>
                </IconButton>
              </Grid>
              <Grid item xs>
              <img
                  src={props.logoSrc}
                  className={classes.logo}
                  alt={classes.logoAlt}
                />             
              </Grid>
              <Grid item>
              <IconButton>
                <Icon color="primary" >shopping_cart</Icon>
              </IconButton>
              </Grid>
              <Grid item>
              <IconButton>
                <Icon color="primary">account_circle</Icon>
              </IconButton>
              </Grid>
              <Grid item>
              <IconButton>
                <Icon color="primary">more_vertical</Icon>
              </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
      <AppBar position={'sticky'} elevation={0} className={classes.appBarBg}>
        <Toolbar />
      </AppBar>
      <AppBar className={classes.searchBox} elevation={2} position={'sticky'}>
        <InputBase
          className={classes.searchInput}
          placeholder={'Type to search...'}
        />
      </AppBar>
      <Drawer open={opened} onClose={() => setOpened(false)}>
        <Box minWidth={320}>
          <ListItem>
            <ListItemIcon>
              <IconButton onClick={() => setOpened(false)}>
              <Icon>close</Icon>
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <Divider light />
          {menus.map(renderItem(0))}
        </Box>
      </Drawer>
    </>
  );
};

IglooSmallHeader.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string
};
IglooSmallHeader.defaultProps = {
  menus: [],
  logoSrc: "https://uc.uxpin.com/files/732773/730600/image-6d6f68.png",
  logoAlt: "IGLOO Design System"

};

export default IglooSmallHeader;
