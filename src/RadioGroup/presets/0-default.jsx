import * as React from "react";
import RadioGroup from "../RadioGroup";
import Radio from "../../Radio/Radio";
import FormControlLabel from "../../FormControlLabel/FormControlLabel";

export default (
  <RadioGroup uxpId="3">
    <FormControlLabel
      value="female"
      control={<Radio uxpId="radio1" />}
      label="Female"
      uxpId="FormControlLabel1"
    />
    <FormControlLabel
      value="male"
      control={<Radio uxpId="radio2" />}
      label="Male"
      uxpId="FormControlLabel2"
    />
    <FormControlLabel
      value="other"
      control={<Radio uxpId="radio3" />}
      label="Other"
      uxpId="FormControlLabel3"
    />
    <FormControlLabel
      value="disabled"
      disabled={true}
      control={<Radio uxpId="radio4" />}
      label="(Disabled option)"
      uxpId="FormControlLabel4"
    />
  </RadioGroup>
);
