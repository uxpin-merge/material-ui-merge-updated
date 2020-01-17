import * as React from "react";
import Grid from "../Grid";
import Paper from "../../Paper/Paper";

export default (
  <Grid container spacing={2} uxpId="1">
    <Grid item xs={12} sm={6}  uxpId="1.1">
      <Paper uxpId="1.1.1">Content here</Paper>
    </Grid>
    <Grid item xs={12} sm={6} uxpId="1.2">
      <Paper uxpId="1.2.1">Content here</Paper>
    </Grid>
  </Grid>
);
