import * as React from "react";

import IglooHeader from "../IglooHeader";
// import TestComponent from '../../TestComponent/TestComponent';
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Badge from "../../Badge/Badge";

export default (
  <IglooHeader uxpId="1">
    <IconButton
      arialabel="Notifications"
      color="primary"
      uxpId="1.1"
      color="primary"
    >
      <Icon uxpId="1.1.1">notifications</Icon>
    </IconButton>
    <IconButton arialabel="Shopping Cart" color="primary" uxpId="1.2" >
      <Badge badgeContent={3} max={9} uxpId="1.2.1">
        <Icon uxpId="1.2.1.1">shopping_cart</Icon>
      </Badge>
    </IconButton>
  </IglooHeader>
);
