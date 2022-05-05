const scale = require('./scale');
const createSizeProperties = require('../utils/createSizeProperties');

const maxColumns = 12;
const maxRows = 6;
const grid = {
  colsNone: {gridTemplateColumns: 'none'},
  rowsNone: {gridTemplateRows: 'none'},
  colAuto: {gridColumn: 'auto'},
  colFull: {gridColumn: '1 / -1'},
  colEndAuto: {colRowEnd: 'auto'},
  colStartAuto: {colStartEnd: 'auto'},
  rowAuto: {gridRow: 'auto'},
  rowFull: {gridRow: '1 / -1'},
  rowEndAuto: {gridRowEnd: 'auto'},
  rowStartAuto: {gridStartEnd: 'auto'},

  autoFlowRow: {gridAutoFlow: 'row'},
  autoFlowCol: {gridAutoFlow: 'column'},
  autoFlowRowDense: {gridAutoFlow: 'row dense'},
  autoFlowColDense: {gridAutoFlow: 'column dense'},

  autoColsMin: {gridAutoColumns: 'min-content'},
  autoColsMax: {gridAutoColumns: 'max-content'},
  autoCols: {gridAutoColumns: 'auto'},

  autoRowsMin: {gridAutoRows: 'min-content'},
  autoRowsMax: {gridAutoRows: 'max-content'},
  autoRows: {gridAutoRows: 'auto'},

  gap: createSizeProperties('gap', scale.rem),
  gapX: createSizeProperties('column-gap', scale.rem),
  gapY: createSizeProperties('row-gap', scale.rem),
};

for (let i = 1; i <= maxColumns; i++) {
  grid[`cols-${i}`] = {gridTemplateColumns: `repeat(${i}, minmax(0, 1fr))`};
  grid[`col-${i}`] = {gridColumn: `span ${i} / span ${i}`};
  grid[`col-start-${i}`] = {gridColumnStart: `${i}`};
  grid[`col-end-${i}`] = {gridColumnEnd: `${i}`};
}

for (let i = 1; i <= maxRows; i++) {
  grid[`rows-${i}`] = {gridTemplateRows: `repeat(${i}, minmax(0, 1fr))`};
  grid[`row-${i}`] = {gridRow: `span ${i} / span ${i}`};
  grid[`row-start-${i}`] = {gridRowStart: `${i}`};
  grid[`row-end-${i}`] = {gridRowEnd: `${i}`};
}

module.exports = grid;
