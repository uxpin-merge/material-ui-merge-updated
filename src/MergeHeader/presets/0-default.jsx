import * as React from "react";

import MergeHeader from "../MergeHeader";
// import TestComponent from '../../TestComponent/TestComponent';
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Badge from "../../Badge/Badge";


let menus = 
  [
    {
        "active": true,
        "opened": true,
        "label": "Marketing Services",
        "submenu": [
            {
                "label": "Branding",
                "submenu": [
                    {
                        "label": "Brochures"
                    },
                    {
                        "label": "Business Cards"
                    },
                    {
                        "label": "Logos"
                    }
                ]
            },
            {
                "label": "Variable Printing",
                "submenu": [
                    {
                        "label": "Igen"
                    },
                    {
                        "label": "1-to-1"
                    }
                ]
            },
            {
                "label": "Loyalty",
                "active": true,
            },
            {
                "label": "Social Media"
            }
        ]
    },
    {
        "icon": "data_usage",
        "label": "Data Solutions"
    },
    {
        "icon": "widgets",
        "label": "Technology"
    },
    {
        "icon": "bookmarkss",
        "label": "From Side"
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
  <MergeHeader uxpId="1"
  menus={menus}
  logoSrc = "https://uc.uxpin.com/files/1206445/1163114/UXPinMerge_Logo_WhiteFill_x2-9ca6d5c0d7210e31cb6c17e797466b7d-f7dc09.png"
  logoAlt = "UXPin Merge"
  desktopNavigationVariant = "vertical"
  hasAccountIcon = {true}
  accountMenu= {accountMenu}
  hasSearch = {true}
  inline = {true}
  hasNavigation = {false}
  >
    <IconButton
      arialabel="Notifications"
      uxpId="1.1"
    >
      <Icon uxpId="1.1.1" color="inherit">notifications</Icon>
    </IconButton>
    <IconButton arialabel="Shopping Cart" uxpId="1.2" >
      <Badge badgeContent="3" max="9" uxpId="1.2.1">
        <Icon uxpId="1.2.1.1">shopping_cart</Icon>
      </Badge>
    </IconButton>
  </MergeHeader>
);
