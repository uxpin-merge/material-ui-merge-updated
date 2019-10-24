import * as React from 'react';
import TestComponent from "../TestComponent";
import Button from '@material-ui/core/Button'


export default (
  <>

        <TestComponent UXPid="1">
          <Button variant="contained" color="primary" UXPid="2">
            I'm inside the frame
          </Button>
        </TestComponent>
</>
);