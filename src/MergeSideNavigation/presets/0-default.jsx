import * as React from 'react';

import MergeSideNavigation from '../MergeSideNavigation';

var menus = 
  [
    {
        "active": true,
        "opened": true,
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

export default (
  <MergeSideNavigation menus={menus} uxpId="1" />
);