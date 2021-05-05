import * as React from "react";

import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Tooltip from "../Tooltip";

export default (
  <Tooltip title="Title Here" uxpId="tooltip0" PopperProps={{ keepMounted: true }}>
    <IconButton uxpId="IconButton0">
        <Icon uxpId="Icon0">
          delete
        </Icon>
        </IconButton>
  </Tooltip>
);
