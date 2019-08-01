import * as React from "react";

import Drawer from "../DrawerModalUXP";
import Icon from "../../Icon/Icon";
import List from "../../List/List";
import ListItem from "../../ListItem/ListItem";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
import ListItemText from "../../ListItemText/ListItemText";
import ListSubheader from "../../ListSubheader/ListSubheader";

export default (
  <Drawer minHeight="600" anchor="left" open={true} variant="temporary" uxpId="1">
    <List uxpId="2">
    <ListItem button={false} uxpId="2.1">
        <ListItemText primary="Title" secondary="Subheading here" primaryTypographyProps={{
    "variant": "h6"
}} uxpId="2.2" />
      </ListItem>
      <ListItem button={true} uxpId="3">
        <ListItemIcon uxpId="4">
          <Icon uxpId="5">inbox</Icon>
        </ListItemIcon>
        <ListItemText primary="Inbox" uxpId="6" />
      </ListItem>
      <ListItem button={true} uxpId="7">
        <ListItemIcon uxpId="8">
          <Icon uxpId="9">star</Icon>
        </ListItemIcon>
        <ListItemText primary="Star" uxpId="10" />
      </ListItem>
      <ListItem button={true} uxpId="11">
        <ListItemIcon uxpId="12">
          <Icon uxpId="13">send</Icon>
        </ListItemIcon>
        <ListItemText primary="Sent Mail" uxpId="14" />
      </ListItem>
      <ListItem button={true} divider={true} uxpId="15">
        <ListItemIcon uxpId="16">
          <Icon uxpId="17">drafts</Icon>
        </ListItemIcon>
        <ListItemText primary="Drafts" uxpId="18" />
      </ListItem>
      <ListSubheader disableSticky="true" uxpId="18.5">
        Labels
      </ListSubheader>
      <ListItem button={true} uxpId="19">
        <ListItemIcon uxpId="20">
          <Icon uxpId="21">bookmark</Icon>
        </ListItemIcon>
        <ListItemText primary="Family" uxpId="22" />
      </ListItem>
      <ListItem button={true} uxpId="23">
        <ListItemIcon uxpId="24">
          <Icon uxpId="25">bookmark</Icon>
        </ListItemIcon>
        <ListItemText primary="Friends" uxpId="26" />
      </ListItem>
      <ListItem button={true} uxpId="27">
        <ListItemIcon uxpId="28">
          <Icon uxpId="29">bookmark</Icon>
        </ListItemIcon>
        <ListItemText primary="Work" uxpId="30" />
      </ListItem>
    </List>
  </Drawer>
);
