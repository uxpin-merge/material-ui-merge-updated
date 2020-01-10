import * as React from "react";
import ComponentDemoInspectorWrapper from "../ComponentDemoInspectorWrapper";
import ComponentDemoInspector from "../../ComponentDemoInspector/ComponentDemoInspector";
import Typography from "../../Typography/Typography";
import ExpansionPanel from "../../ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "../../ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "../../ExpansionPanelDetails/ExpansionPanelDetails";
import Button from "../../ButtonUXP/ButtonUXP";

export default (
  <ComponentDemoInspectorWrapper uxpId="componentDemoInspectorWrapper">
    <ComponentDemoInspector uxpId="componentDemoInspector">
      <Button uxpId="button" variant="contained" color="primary">dddd</Button>
    </ComponentDemoInspector>

    <ExpansionPanel uxpId="expansion.uxp">
      <ExpansionPanelSummary uxpId="expansion.uxp.summary">
        <Typography uxpId="expansion.uxp.summary.name">UXPin Use &amp; Information</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails uxpId="expansion.uxp.details">
        <Typography uxpId="expansion.uxp.details.content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </ComponentDemoInspectorWrapper>
);
