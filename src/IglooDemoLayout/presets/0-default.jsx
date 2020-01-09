import * as React from "react";
import IglooDemoLayout from "../IglooDemoLayout";
import IglooSimpleLayoutContent from "../../IglooSimpleLayoutContent/IglooSimpleLayoutContent";
import IglooDemoHeader from "../../IglooDemoHeader/IglooDemoHeader";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Badge from "../../Badge/Badge";



export default (
  <IglooDemoLayout uxpId="1">
    <IglooDemoHeader uxpId="2"

    logoSrc = "https://uc.uxpin.com/files/732773/730600/image-6d6f68.png"
    logoAlt = "IGLOO Design System"
    desktopNavigationVariant = "vertical"
    hasAccountIcon = {false}

    hasSearch = {false}
    >
    </IglooDemoHeader>

    <IglooSimpleLayoutContent uxpId="3">content here</IglooSimpleLayoutContent>
  </IglooDemoLayout>
);
