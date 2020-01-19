import * as React from "react";
import IglooSimpleLayout from "../IglooSimpleLayout";
// import Box from '../../Box/Box';
import IglooSimpleLayoutContent from "../../IglooSimpleLayoutContent/IglooSimpleLayoutContent";
import IglooHeader from "../../IglooHeader/IglooHeader";
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
                "label": "Variable Printing"
            },
            {
                "label": "Loyalty",
                "active": true
            },
            {
                "label": "Social Media"
            }
        ]
    },
    {
        "icon": "data_usage",
        "label": "Data Solutions",
        "url": "http://www.google.com",
    },
    {
        "icon": "widgets",
        "label": "Technology",
        "url": "http://www.google.com",
    },
    {
        "icon": "bar_chart",
        "label": "Analysis",
        "url": "http://www.google.com",
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
  <IglooSimpleLayout uxpId="1">
    <IglooHeader uxpId="2"
    menus={menus}
    logoSrc = "https://uc.uxpin.com/files/732773/730600/image-6d6f68.png"
    logoAlt = "IGLOO Design System"
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
    </IglooHeader>

    <IglooSimpleLayoutContent uxpId="3">content here</IglooSimpleLayoutContent>
  </IglooSimpleLayout>
);
