import * as React from "react";

import Switch from "../../Switch/Switch";
import List from "../List";
import ListItem from "../../ListItem/ListItem";

export default (
  <List subheadText="List Item Examples" uxpId="1">
    <ListItem primary="Inbox" icon="inbox" uxpId="ListItem.1" />
    <ListItem primary="Wi-Fi" icon="wifi" hasDivider uxpId="ListItem.2">
      <Switch uxpId="ListItem.2.1" />
    </ListItem>
    <ListItem primary="With Submenu" icon="settings" selected isCollapsible={true} collapsed={true} uxpId="ListItem.3"
    >
      <ListItem
        primary="First Sublink" uxpId="ListItem.3.1" divider={false} selected
      ></ListItem>
        <ListItem
        primary="Second Sublink" divider={false} uxpId="ListItem.3.2"
      ></ListItem>
      
    </ListItem>


    <ListItem
      primary="Double Line Item"
      secondary="Secondary text"
      uxpId="ListItem.4"
    />
  </List>
);
