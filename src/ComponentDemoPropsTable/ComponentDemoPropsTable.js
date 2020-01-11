import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    //  minWidth: 650
  }
}));



function ComponentDemoPropsTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>DESCRIPTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.menus.map(item => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ComponentDemoPropsTable.propTypes = {
   menus: PropTypes.array,
 };
 
 ComponentDemoPropsTable.defaultProps = {
   toggleText: "Collapse Me",


  menus: [
    { name: 'Data Solutions', description: 'data_usage' },
  ],

 };
export { ComponentDemoPropsTable as default };
