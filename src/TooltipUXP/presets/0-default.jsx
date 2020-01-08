import * as React from "react";

import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import SimpleTooltips from "../TooltipUXP";

export default (
  <SimpleTooltips title="Title Here" uxpId="tooltip0" PopperProps={{ keepMounted: true }}>
    <IconButton uxpId="IconButton0">
        <Icon uxpId="Icon0">
          delete
        </Icon>
        </IconButton>
  </SimpleTooltips>
);
