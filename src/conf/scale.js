const pixelsToRem = require('../utils/pixelsToRem');
const config = require('../getUserConfig');

const px = {...{
  0: '0',
  0.25: '1px',
  0.5: '2px',
  0.75: '3px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  4.5: '18px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px'
}, ...config.scale?.px};

const rem = Object.fromEntries(
  Object.entries(px).map(([key, value]) =>
    [key, pixelsToRem(value)])
);

module.exports = {
  px: px,
  rem: rem
}
