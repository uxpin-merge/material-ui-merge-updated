import * as React from "react";
import MergeBasicLayout from "../MergeBasicLayout";
// import Box from '../../Box/Box';
import MergeMainContent from "../../MergeMainContent/MergeMainContent";
import MergeHeader from "../../MergeHeader/MergeHeader";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Badge from "../../Badge/Badge";

let menus = 
[
  {
      "active": true,
      "opened": true,
      "icon": "home",
      "label": "Level 1",
      "submenu": [
          {
              "label": "Level 2",
              "submenu": [
                  {
                      "active": true,
                      "label": "level 3"
                  },
                  {
                      "label": "level 3"
                  },
                  {
                      "label": "level 3"
                  }
              ]
          },
          {
              "label": "Level 2",
              "submenu": [
                  {
                      "label": "level 3"
                  },
                  {
                      "label": "level 3"
                  }
              ]
          },
          {
              "label": "Level 2",
          },
          {
              "label": "Level 2"
          }
      ]
  },
  {
      "icon": "data_usage",
      "label": "Level 1"
  },
  {
      "icon": "widgets",
      "label": "Level 1"
  },
  {
      "icon": "bookmarkss",
      "label": "Level 1"
  }
]

let accountMenu = [
    { label: "Profile" },
    { label: "Favorites" },
    { label: "Marketing Lists" },
    { label: "All Orders", hasDivider: true },
    { label: "Logout", icon: "cancel" }
  ]

export default (
  <MergeBasicLayout uxpId="1">
    <MergeHeader uxpId="2"
    menus={menus}
    logoSrc = "https://uc.uxpin.com/files/1206445/1163114/UXPinMerge_Logo_WhiteFill_x2-9ca6d5c0d7210e31cb6c17e797466b7d-f7dc09.png"
    logoAlt = "UXPin Merge"
    desktopNavigationVariant = "vertical"
    hasAccountIcon = {true}
    accountMenu= {accountMenu}
    hasSearch = {true}
    hasNavigation = {true}
    >
    
    <IconButton
      arialabel="Notifications"
      color="primary"
      uxpId="2.1"
      color="primary"
    >
      <Icon uxpId="2.1.1">notifications</Icon>
    </IconButton>
    <IconButton arialabel="Shopping Cart" color="primary" uxpId="2.2" >
      <Badge badgeContent="3" max="9" uxpId="2.2.1">
        <Icon uxpId="2.2.1.1">shopping_cart</Icon>
      </Badge>
    </IconButton>
    </MergeHeader>

    <MergeMainContent uxpId="3">content here</MergeMainContent>
  </MergeBasicLayout>
);
