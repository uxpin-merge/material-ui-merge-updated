import * as React from "react";
import ComponentDemoInspectorWrapper from "../ComponentDemoInspectorWrapper";
import ComponentDemoInspector from "../../ComponentDemoInspector/ComponentDemoInspector";
import Button from "../../ButtonUXP/ButtonUXP";
import CollapsePanel from "../../CollapsePanel/CollapsePanel";

export default (
  <ComponentDemoInspectorWrapper uxpId="componentDemoInspectorWrapper">
    <ComponentDemoInspector uxpId="componentDemoInspector">
      <Button uxpId="button" variant="contained" color="primary">dddd</Button>
    </ComponentDemoInspector>
    <CollapsePanel toggleText="UXPin Usage &amp; Info" uxpId="componentDemoCollapse">
    content goes here
    </CollapsePanel>    
  </ComponentDemoInspectorWrapper>
);
