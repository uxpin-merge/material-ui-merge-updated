import * as React from "react";
import IglooSimpleLayout from "../IglooSimpleLayout";
// import Box from '../../Box/Box';
import IglooSimpleLayoutContent from "../../IglooSimpleLayoutContent/IglooSimpleLayoutContent";
import IglooHeader from "../../IglooHeader/IglooHeader";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Badge from "../../Badge/Badge";


export default (
  <IglooSimpleLayout uxpId="1">
    <IglooHeader uxpId="2">
    <IconButton
      arialabel="Notifications"
      color="primary"
      uxpId="2.1"
      color="primary"
    >
      <Icon uxpId="2.1.1">notifications</Icon>
    </IconButton>
    <IconButton arialabel="Shopping Cart" color="primary" uxpId="2.2" >
      <Badge badgeContent={3} max={9} uxpId="2.2.1">
        <Icon uxpId="2.2.1.1">shopping_cart</Icon>
      </Badge>
    </IconButton>
    </IglooHeader>

    <IglooSimpleLayoutContent uxpId="3">content here</IglooSimpleLayoutContent>
  </IglooSimpleLayout>
);
