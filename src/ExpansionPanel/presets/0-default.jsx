import * as React from "react";
import ExpansionPanel from "../ExpansionPanel";
import ExpansionPanelSummary from "../../ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "../../ExpansionPanelDetails/ExpansionPanelDetails";
import Typography from "../../Typography/Typography";

export default (

    <ExpansionPanel IsElevated uxpId="1">
      <ExpansionPanelSummary uxpId="2">
        <Typography uxpId="3">Expansion Panel 1</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails uxpId="4">
        <Typography uxpId="5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  
);