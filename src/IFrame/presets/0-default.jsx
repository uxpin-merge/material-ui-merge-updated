import * as React from 'react';

import IFrame from '../IFrame';
import Button from "@material-ui/core/Button";

export default (
   <>
   <Button variant="contained" color="primary" uxpId="2">
            I'm inside the frame
          </Button>
  <IFrame uxpId="1">
     <Button variant="contained" color="primary" uxpId="2">
            I'm inside the frame
          </Button>
  </IFrame>
  </>
);