const {
  formatColors,
  formatOpacity,
  createColorUtilities,
} = require('../utils/formatColors');
const nestedMerge = require('../utils/nestedMerge');
const config = require('../getUserConfig');

const typography = require('./typography');
const border = require('./border');
const palette = require('./palette');
const opacity = require('./opacity');

const colors = {
  ...formatColors(palette, opacity),
  ...{
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
  }
};

const utilities = {
  text: createColorUtilities(colors, 'color'),
  bg: createColorUtilities(colors, 'backgroundColor'),
  border: createColorUtilities(colors, 'borderColor'),
  opacity: formatOpacity(opacity)
};
// Merge with all the individual default utility configs.
for(let defaults of [
  require('./cursor'),
  require('./transition'),
  require('./display'),
  require('./screen'),
  require('./spacing'),
  require('./sizing'),
  require('./flex'),
  require('./grid'),
  require('./typography'),
  require('./border')
]) {
  nestedMerge(utilities, defaults);
}

// Merge in the custom values.
const customOpacity = config.opacity;
const customPalette = formatColors(config.palette, {...opacity, ...customOpacity});

nestedMerge(utilities, {
  opacity: formatOpacity(customOpacity),
  text: createColorUtilities(customPalette, 'color'),
  bg: createColorUtilities(customPalette, 'backgroundColor'),
  border: createColorUtilities(customPalette, 'borderColor'),
  ...config.fonts,
  ...config.extend
});

module.exports = {
  ...utilities,
  ...config.override
};
