import * as React from "react";

import Drawer from "../Drawer";
import IglooSideNavigation from "../../IglooSideNavigation/IglooSideNavigation"
var menus = 
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
        "icon": "bookmarks",
        "label": "From Side"
    }
]
export default (
  <Drawer  anchor="left" open={true} variant="temporary" width={256} uxpId="1">
    <IglooSideNavigation menus={menus} uxpId="2"/>
  </Drawer>
);
