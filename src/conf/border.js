const scale = require('./scale');
const createSizeProperties = require('../utils/createSizeProperties');
const borderWidths = {
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  6: '6px',
  8: '8px',
};

const border = {
  border: {
    solid: {borderStyle: 'solid'},
    dashed: {borderStyle: 'dashed'},
    dotted: {borderStyle: 'dotted'},
    double: {borderStyle: 'double'},
    hidden: {borderStyle: 'hidden'},
    none: {borderStyle: 'none'},
    ...createSizeProperties('border-width', borderWidths),
    x: createSizeProperties(['border-left-width', 'border-right-width'], borderWidths),
    y: createSizeProperties(['border-top-width', 'border-bottom-width'], borderWidths),
    t: createSizeProperties('border-top-width', borderWidths),
    b: createSizeProperties('border-bottom-width', borderWidths),
    l: createSizeProperties('border-left-width', borderWidths),
    r: createSizeProperties('border-right-width', borderWidths),
  },
  radius: {
    ...createSizeProperties('border-radius', {
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      50: '50%'
    })
  }
};

module.exports = border;
