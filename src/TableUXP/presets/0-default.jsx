import * as React from 'react';

import TableUXP from '../TableUXP';

let columns = ['Dessert', 'Calories', 'Fat', 'Carbs', 'Protein'];
let rows = [
  {id: '1', 'Dessert': 'Cupcake', 'Calories': '305', 'Fat': '3.7', 'Carbs': '67', 'Protein': '4.3'},
  {id: '2', 'Dessert': 'Donut', 'Calories': '452', 'Fat': '25.0', 'Carbs': '51', 'Protein': '4.9'},
  {id: '3', 'Dessert': 'Eclair', 'Calories': '262', 'Fat': '16.0', 'Carbs': '24', 'Protein': '6.0'},
  {id: '4', 'Dessert': 'Frozen yoghurt', 'Calories': '159', 'Fat': '6.0', 'Carbs': '24', 'Protein': '4.0'},
  {id: '5', 'Dessert': 'Gingerbread', 'Calories': '356', 'Fat': '16.0', 'Carbs': '49', 'Protein': '3.9'},
  {id: '6', 'Dessert': 'Honeycomb', 'Calories': '408', 'Fat': '3.2', 'Carbs': '7', 'Protein': '6.5'},
  {id: '7', 'Dessert': 'Ice cream sandwich', 'Calories': '237', 'Fat': '9.0', 'Carbs': '37', 'Protein': '4.3'},
  {id: '8', 'Dessert': 'Jelly Bean', 'Calories': '375', 'Fat': '0.0', 'Carbs': '94', 'Protein': '0.0'},
  {id: '9', 'Dessert': 'KitKat', 'Calories': '518', 'Fat': '26.0', 'Carbs': '65', 'Protein': '7.0'},
  {id: '10', 'Dessert': 'Lollipop', 'Calories': '392', 'Fat': '0.2', 'Carbs': '98', 'Protein': '0.0'},
  {id: '11', 'Dessert': 'Marshmallow', 'Calories': '318', 'Fat': '0', 'Carbs': '81', 'Protein': '2.0'},
  {id: '12', 'Dessert': 'Nougat', 'Calories': '360', 'Fat': '19.0', 'Carbs': '9', 'Protein': '37.0'},
  {id: '13', 'Dessert': 'Oreo', 'Calories': '437', 'Fat': '18.0', 'Carbs': '63', 'Protein': '4.0'},
];


export default (
  <TableUXP
  columns = {columns}
  rows = {rows}
  hasPagination={true}
  rowsPerPageOptions={[5, 10, 25]}
  rowsPerPage={5}
  page={0}
  uxpId='table1'
  hasSelection={true}
  hasHeader={false}
  headerText='Nutrition'
  hasSorting={true}
  orderBy='Dessert'
  order='asc'
  elevation={0}
  />
);
