import * as React from "react";

import Avatar from "../../Avatar/Avatar";
import Checkbox from "../../Checkbox/Checkbox";
import DividerUXP from "../../DividerUXP/DividerUXP";
import Icon from "../../Icon/Icon";
import List from "../List";
import ListItem from "../../ListItem/ListItem";
import ListItemAvatar from "../../ListItemAvatar/ListItemAvatar";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
import ListItemSecondaryAction from "../../ListItemSecondaryAction/ListItemSecondaryAction";
import ListItemText from "../../ListItemText/ListItemText";
import ListSubheader from "../../ListSubheader/ListSubheader";
import Switch from "../../Switch/Switch";

export default (
  <List uxpId="1">
    <ListItem button={true} uxpId="2">
      <ListItemText primary="Single-Line item" uxpId="3" />
    </ListItem>
    <ListItem selected={true} button={true} uxpId="4">
      <ListItemText primary="Selected Single-Line item" uxpId="5" />
    </ListItem>
    <ListItem button={true} uxpId="6">
      <ListItemText
        secondary="This is secondary text"
        primary="Two Line item"
        uxpId="7"
      />
    </ListItem>
    <ListItem button={true} uxpId="8">
      <ListItemText
        secondary="This is secondary text that is longer and should span two lines"
        primary="Three Line item"
        uxpId="9"
      />
    </ListItem>
    <DividerUXP uxpId="10" />
    <ListSubheader disableSticky={true} uxpId="11">
      Avatar List Items
    </ListSubheader>
    <ListItem button={true} uxpId="12">
      <ListItemAvatar uxpId="13">
        <Avatar
          alt="Alexander Smith"
          src="https://i.pravatar.cc/150?img=8"
          uxpId="14"
        />
      </ListItemAvatar>
      <ListItemText secondary="" primary="Alexander Smith" uxpId="15" />
    </ListItem>
    <ListItem button={true} uxpId="16">
      <ListItemAvatar uxpId="17">
        <Avatar
          alt="Ally O'Donnell"
          src="https://i.pravatar.cc/150?img=28"
          uxpId="18"
        />
      </ListItemAvatar>
      <ListItemText
        secondary="CEO of Acme Corp."
        primary="Ally O'Donnell"
        uxpId="19"
      />
      <ListItemSecondaryAction uxpId="19.1">
        <Checkbox uxpId="20" />
      </ListItemSecondaryAction>
    </ListItem>
    <DividerUXP uxpId="21" />
    <ListSubheader uxpId="22">Icons in List Items</ListSubheader>
    <ListItem uxpId="23">
      <ListItemIcon uxpId="24">
        <Icon uxpId="25">wifi</Icon>
      </ListItemIcon>
      <ListItemText primary="WiFi" uxpId="26" />
    </ListItem>
    <ListItem uxpId="27">
      <ListItemIcon uxpId="28">
        <Icon uxpId="29">bluetooth</Icon>
      </ListItemIcon>
      <ListItemText
        primary="With Control..."
        secondary="And secondary text"
        uxpId="30"
      />
      <ListItemSecondaryAction uxpId="31">
        <Switch uxpId="32" />
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);
