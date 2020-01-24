import { createMuiTheme } from "@material-ui/core/styles";
import igloo from "./igloo"; 
 
 const theme2 = createMuiTheme({
   ...igloo,
   palette: {
      primary: {
         main: "#cccccc", //you can also use a color reference, i.e. blue[700]
      }
   }
});

export default theme2;

