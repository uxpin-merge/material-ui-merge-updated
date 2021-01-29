import * as React from "react";
import Tabs from "../Tabs";
import Tab from "../../Tab/Tab";

export default (
  <Tabs
    indicatorColor="primary"
    textColor="primary"
    uxpId="1"
    value={0}
  >
    <Tab label="Active" uxpId="2" value={0} fullWidth />
    <Tab label="Disabled" uxpId="3" value={1} fullWidth />
    <Tab label="Active" uxpId="4" value={2} fullWidth />
  </Tabs>
);
