import * as React from "react";

import Avatar from "../../Avatar/Avatar";
import Button from "../../Button/Button";
import DialogActions from "../../DialogActions/DialogActions"
import DialogContent from "../../DialogContent/DialogContent";
import DialogContentText from "../../DialogContentText/DialogContentText";
import DialogSimpleUXP from "../DialogSimpleUXP";
import DialogTitle from "../../DialogTitle/DialogTitle";
import Icon from "../../Icon/Icon";
import List from "../../List/List";
import ListItem from "../../ListItem/ListItem";
import ListItemAvatar from "../../ListItemAvatar/ListItemAvatar";
import ListItemText from "../../ListItemText/ListItemText";

export default (
  <DialogSimpleUXP open="true" height="400" uxpId="DialogSimpleUXP0">
    <DialogTitle uxpId="DialogTitle0" >Select an Account</DialogTitle>
          <List uxpId="List0">
              <ListItem button uxpId="ListItem0">
                <ListItemAvatar uxpId="ListItemAvatar0">
                  <Avatar uxpId="Avatar0">
                    <Icon uxpId="Icon0">person_icon</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="jane.doe@company.com" uxpId="ListItemText0"/>
              </ListItem>
              <ListItem button uxpId="ListItem1">
                <ListItemAvatar uxpId="ListItemAvatar1">
                  <Avatar uxpId="Avatar1">
                    <Icon uxpId="Icon1">person_icon</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="tom.smith@company.com" uxpId="ListItemText1"/>
              </ListItem>
              <ListItem button uxpId="ListItem2">
                <ListItemAvatar uxpId="ListItemAvatar2" >
                  <Avatar uxpId="Avatar2" color="secondary">
                    <Icon uxpId="Icon2" >add</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Add Account" uxpId="ListItemText2"/>
              </ListItem>
          </List>  
  </DialogSimpleUXP>
);
