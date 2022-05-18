const config = require('../getUserConfig');

const breakpoints = {
  xs: {
    minWidth: '320px'
  },
  sm: {
    minWidth: '481px'
  },
  md: {
    minWidth: '768px'
  },
  lg: {
    minWidth: '922px'
  },
  xl: {
    minWidth: '1201px'
  },
  '2xl': {
    minWidth: '1500px'
  }
};

module.exports = {
  ...breakpoints,
  ...config.breakpoints || {}
};
