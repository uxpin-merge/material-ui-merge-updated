import { createMuiTheme } from "@material-ui/core/styles";
import igloo from "./igloo"; 

 const theme1 = createMuiTheme({
   ...igloo,
   palette: {
      primary: {
         main: "#2b2b2b",
      }
   }
});

export default theme1;

