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
  listItemText: {
    letterSpacing: '1px',
    fontWeight: 500,
  },
  subList: {
    backgroundColor: '#f8f8f8',
  }
}));
function IglooSideNavigation(props) {
  const trigger = useScrollTrigger();
  const classes = useStyles({ trigger });
  const [collapsedIndex, setCollapsedIndex] = useState([null, null, null]);
  const updateByIndex = (val, level) => {
    setCollapsedIndex(
      collapsedIndex.map((item, i) => (i === level ? val : item)),
    );
  };
  console.log("iglooSideProps: ", props.menus);

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
            <Icon fontSize={'small'} push={'right'}>
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
          {props.menus.map(renderItem(0))}
    </>
  );
};

IglooSideNavigation.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
};
IglooSideNavigation.defaultProps = {
  menus: [
    {
      label: 'Marketing Services',
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
    { label: 'From Side', icon: 'bookmark' },
  ],
};

export default IglooSideNavigation;
