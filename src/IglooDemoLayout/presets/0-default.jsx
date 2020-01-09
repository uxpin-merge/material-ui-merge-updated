import * as React from "react";
import IglooDemoLayout from "../IglooDemoLayout";
import IglooSimpleLayoutContent from "../../IglooSimpleLayoutContent/IglooSimpleLayoutContent";
import IglooDemoHeader from "../../IglooDemoHeader/IglooDemoHeader";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Badge from "../../Badge/Badge";

let menus = 
  [
    {
        "label": "UXPin Guides",
        "submenu": [
            {
                "label": "Using Grids"
            },
            {
                "label": "Adding the Device Viewer",
            },
            {
                "label": "Social Media"
            }
        ]
    },
    {
      "active": true,
      "opened": true,
      "label": "Components",
      "submenu": [
          {
              "label": "Buttons",
              "url": "https://preview.uxpin.com/ec1a05430ba8dead2702ed9f36c37b92b769577c#/pages/122142765?mode=cvhidfm"
          },
          {
              "label": "Avatar",
          },
          {
              "label": "Card"
          }
      ]
  },
]

let accountMenu = [
    { label: "Profile" },
    { label: "Favorites" },
    { label: "Marketing Lists" },
    { label: "All Orders", hasDivider: true },
    { label: "Logout", icon: "cancel" }
  ]

export default (
  <IglooDemoLayout uxpId="1">
    <IglooDemoHeader uxpId="2"
    menus={menus}
    logoSrc = "https://uc.uxpin.com/files/732773/730600/image-6d6f68.png"
    logoAlt = "IGLOO Design System"
    desktopNavigationVariant = "vertical"
    hasAccountIcon = {false}
    accountMenu= {accountMenu}
    hasSearch = {false}
    >
    </IglooDemoHeader>

    <IglooSimpleLayoutContent uxpId="3">content here</IglooSimpleLayoutContent>
  </IglooDemoLayout>
);
