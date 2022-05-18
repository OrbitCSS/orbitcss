const scale = require('./scale');
const createSizeProperties = require('../utils/createSizeProperties');

const sizing = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  full: '100%'
};

const percentages = {
  '1/5': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666666%',
  '1/4': '25%',
  '1/2': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%'
}

module.exports = {
  h: createSizeProperties('height', {
    ...sizing,
    ...scale.rem,
    ...percentages,
    screen: '100vh'
  }),
  maxH: createSizeProperties('max-height', {
    ...sizing,
    ...scale.rem,
    screen: '100vh'
  }),
  minH: createSizeProperties('min-height', {
    ...sizing,
    ...scale.rem,
    screen: '100vh'
  }),
  w: createSizeProperties('width', {
    ...sizing,
    ...scale.rem,
    ...percentages,
    screen: '100vw'
  }),
  maxW: createSizeProperties('max-width', {
    ...sizing,
    ...scale.rem,
    none: 'none',
    screen: '100vw',
    container: '1320px'
  }),
  minW: createSizeProperties('min-width', {
    ...sizing,
    ...scale.rem
  })
};
