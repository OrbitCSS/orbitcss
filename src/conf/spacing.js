const scale = require('./scale');
const createSizeProperties = require('../utils/createSizeProperties');

const padding = {
  p: 'padding',
  py: ['padding-top', 'padding-bottom'],
  px: ['padding-left', 'padding-right'],
  pt: 'padding-top',
  pb: 'padding-bottom',
  pl: 'padding-left',
  pr: 'padding-right'
};

const margin = {
  m: 'margin',
  my: ['margin-top', 'margin-bottom'],
  mx: ['margin-left', 'margin-right'],
  mt: 'margin-top',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mr: 'margin-right'
};

module.exports = Object.fromEntries(
  Object.entries({
    ...padding,
    ...margin
  })
    .map(([key, value]) => [key, createSizeProperties(value, {
      ...scale.rem,
      ...{auto: 'auto'}
    })])
);
