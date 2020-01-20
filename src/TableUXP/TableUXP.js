import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      hasSelection,
      hasSorting
    } = this.props;

    return (
      <TableHead>
        <TableRow>
        {hasSelection &&
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        }

          {this.props.columns.map(
            (item, i) => (
              <TableCell
                key={item}
                sortDirection={orderBy === item ? order : false}
              >
              {hasSorting ? 
             
                <Tooltip title="Sort" placement="bottom-start" enterDelay={100}>
                  <TableSortLabel
                    active={orderBy === item}
                    direction={order}
                    onClick={this.createSortHandler(item)}
                  >
                    {item}
                  </TableSortLabel>
                </Tooltip>
              :
<div>{item}</div>
}
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.array
};

const toolbarStyles = theme => ({
  root: {
    // paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  }
});

let EnhancedTableToolbar = props => {
  const { numSelected, headerText, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            {headerText}
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <Icon aria-label="Delete">delete</Icon>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <Icon aria-label="Filter list">filter_list</Icon>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  headerText: PropTypes.string,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing.unit * 3
  },
  table: {
    // minWidth: 1020,
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class TableUXP extends React.Component {
  state = {
    order: this.props.order,
    orderBy: this.props.orderBy,
    selected: [],
    page: this.props.page,
    rowsPerPage: this.props.rowsPerPage,
    columns: this.props.columns,
    rows: this.props.rows,
    hasPagination: this.props.hasPagination,
    hasSelection: this.props.hasSelection,
    rowsPerPageOptions: this.props.rowsPerPageOptions,
    hasHeader: this.props.hasHeader,
    headerText: this.props.headerText,
    hasSorting: this.props.hasSorting,
    elevation: this.props.elevation,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.rows.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const {
      rows,
      columns,
      order,
      orderBy,
      selected,
      rowsPerPage,
      rowsPerPageOptions,
      page,
      hasPagination,
      hasSelection,
      hasHeader,
      headerText,
      hasSorting,
      elevation
    } = this.state;
 

    return (
      <Paper className={classes.root} elevation={elevation}>
        {hasHeader && <EnhancedTableToolbar numSelected={selected.length} headerText={headerText} />}
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={this.props.rows.length}
              columns={this.props.columns}
              rows={this.props.rows}
              hasSelection = {this.props.hasSelection}
              hasSorting = {this.props.hasSorting}
            />

            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, i) => {
                  const isSelected = this.isSelected(item.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, item.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={item.id}
                      selected={isSelected}
                    >
                      {hasSelection &&
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      }

                      {columns.map((elem, e) =>
                        item[elem] ? (
                          <TableCell key={e}>{item[elem]}</TableCell>
                        ) : (
                          <TableCell key={e}> - </TableCell>
                        )
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        {hasPagination && (
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />

          
        )}
      </Paper>
    );
  }
}

TableUXP.propTypes = {

  /**
   * Values of columns.
   * Format:
   * ["First Name", "Last Name", "Address"]
   */
  columns: PropTypes.arrayOf(PropTypes.string),

  /**
   * Values of rows in (key : value) pairs. Key must match column headers. 
   * MUST include a unique id.
   * Format:
   * [
   *  {
        "id": "1",
        "First Name": "John",
        "Last Name": "Doe",
        "Address": "123 Main Street"
      },
      {
        "id": "3",
        "First Name": "Jane",
        "Last Name": "Doe",
        "Address": "14865 Oak Road"
      },
    ]
  */
  rows: PropTypes.array,



  /**
  * Enable/disable column sorting
  */
  hasSorting: PropTypes.bool,
  


  /**
  * Column name to be sorted by default when sorting is enabled.
  */
  orderBy: PropTypes.string,

  /**
  * Sorting order
  */
  order: PropTypes.oneOf(["asc", "desc"]),

  /**
  * if `true` the table will be have pagination controls.
  */
  hasPagination: PropTypes.bool,

  /**
  * The initial page to be loaded if pagination is enabled.
  */
  page: PropTypes.number,

  /**
  * How many records to display per page. Should match a rowsPerPage value.
  */
  rowsPerPage: PropTypes.number,

  /**
  * Options for "Rows per page" drop-down.
  * Format:
  * [ 5, 10, 25 ]
  */
  rowsPerPageOptions: PropTypes.array,

  /**
  * Enable/disable selection checkboxes
  */
 hasSelection: PropTypes.bool,

  /**
  * Elevation of table container.  
  */
  elevation: PropTypes.number,

    /**
   * Show/Hide the action header
   * @uxpinignoreprop
  */
 hasHeader: PropTypes.bool,

 /**
  * Title of table displaid in action header
  * @uxpinignoreprop
 */
 headerText: PropTypes.string,
  
};

export default withStyles(styles)(TableUXP);
