import * as React from "react";

import Button from "../../ButtonUXP/ButtonUXP";
import DialogActions from "../../DialogActions/DialogActions"
import DialogContent from "../../DialogContent/DialogContent";
import DialogContentText from "../../DialogContentText/DialogContentText";
import DialogTitle from "../../DialogTitle/DialogTitle";
import DialogUXP from "../DialogUXP";

export default (
  <DialogUXP  height={400} uxpId="1">
    <DialogTitle uxpId="2">Dialog Title</DialogTitle>
    <DialogContent uxpId="3">
      <DialogContentText uxpId="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend viverra urna non lacinia. Curabitur sed euismod tortor. Vestibulum ultricies enim at quam finibus ultricies ut non lorem.</DialogContentText>
    </DialogContent>
    <DialogActions uxpId="5">
    <Button color="primary" uxpId="6">
      Disagree
    </Button>
    <Button color="primary" uxpId="7">
      Agree
    </Button>
  </DialogActions>
  </DialogUXP>
);
