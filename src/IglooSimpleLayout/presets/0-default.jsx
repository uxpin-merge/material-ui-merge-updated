import * as React from "react";
import IglooSimpleLayout from "../IglooSimpleLayout";
// import Box from '../../Box/Box';
import IglooSimpleLayoutContent from "../../IglooSimpleLayoutContent/IglooSimpleLayoutContent";
import IglooHeader from "../../IglooHeader/IglooHeader";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";

export default (
  <IglooSimpleLayout uxpId="1">
    <IglooHeader uxpId="2">
      <IconButton aria-label="Add to favorites" uxpId="1.4.1">
        <Icon uxpId="1.4.1.1">favorite</Icon>
      </IconButton>
      <IconButton aria-label="Add to favorites" uxpId="3">
        <Icon uxpId="4">home</Icon>
      </IconButton>
    </IglooHeader>

    <IglooSimpleLayoutContent uxpId="5">content here</IglooSimpleLayoutContent>
  </IglooSimpleLayout>
);
