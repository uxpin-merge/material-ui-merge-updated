import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import igloo from "../ThemeSwitcher/themes/igloo";


import _ from 'lodash';


export default function MergedTheme(props) {
  let userSettings = {
    palette: {
      primary: {
        main: "#000000",
      }
    }
  };


  let mergedSettings = _.merge(
    {},
    igloo,
    userSettings
  );
  
console.log(mergedSettings)
  
  return <Button  color="primary" >button</Button>;
}


// const useStyles = makeStyles(theme => ({
//   root: {
//     background: props =>
//       props.colorNew === 'red'
//         ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
//         : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
//     border: 0,
//     borderRadius: theme.spacing(5),
//     boxShadow: props =>
//       props.colorNew === 'red'
//         ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
//         : '0 3px 5px 2px rgba(33, 203, 243, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     margin: 8,
//   },
// }));

// export default function MyButton(props) {
//   const { colorNew, ...other } = props;
//   const classes = useStyles(props);
  
//   return <Button className={classes.root} color="primary" {...other} >button</Button>;
// }

// MyButton.propTypes = {
//   colorNew: PropTypes.oneOf(['blue', 'red']).isRequired,
// };

