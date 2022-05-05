const hexToRgb = require('./utils/hexToRgb');
const opacity = require('./conf/opacity');

const applyOpacityModifiers = (color, label) => {
  return Object.fromEntries(
    Object.entries(opacity).map(([key, value]) =>
      [`${label}/${key}`, `rgb(${color.r} ${color.g} ${color.b} / ${value})`]
      )
  );
}

const formatColors = (colors) => {
  let formatted = {};
  for(let[label, color] of Object.entries(colors)) {
    if(typeof color === 'string') {
      let rgb = hexToRgb(color);
      formatted = {
        ...formatted,
        ...{[label]: `rgb(${rgb.r} ${rgb.g} ${rgb.b} / 100)`},
        ...applyOpacityModifiers(rgb, label)
      }
    }
    else {
      let palette = {};
      for(let[tone, value] of Object.entries(color)) {
        let rgb = hexToRgb(value);
        palette[label] = {
          ...palette[label],
          ...{[tone]: `rgb(${rgb.r} ${rgb.g} ${rgb.b} / 100)`},
          ...applyOpacityModifiers(rgb, tone)
        }
      }
      formatted = {
        ...formatted,
        ...palette
      };
    }
  }

  return formatted;
}

module.exports = formatColors;
