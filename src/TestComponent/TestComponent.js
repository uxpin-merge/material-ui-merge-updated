import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = chipToDelete => () => {
    // if (chipToDelete.label === 'React') {
    //   alert('Why would you want to delete React?! :)');
    //   return;
    // }

    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}

ChipsArray.propTypes = {
  chipsData: PropTypes.node
};

ChipsArray.defaultProps = {
  chipsData : [{ key: 0, label: 'Jack' }, { key: 0, label: 'Behar' }]
}


// import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import NoSsr from '@material-ui/core/NoSsr';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { compose, spacing, palette, shadows, css } from '@material-ui/system';

// const Box = styled.div`
//   ${css(
//     compose(
//       spacing,
//       palette,
//       shadows
//     ),
//   )}
// `;

// const theme = createMuiTheme();

// export default function CssProp() {
//   return (
//     <NoSsr>
//       <ThemeProvider theme={theme}>
//         <Box color="white" css={{ bgcolor: 'palevioletred', p: 1, boxShadow:3, textTransform: 'uppercase' }}>
//           CssProp
//         </Box>
//       </ThemeProvider>
//     </NoSsr>
//   );
// }