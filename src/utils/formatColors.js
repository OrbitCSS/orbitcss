const hexToRgb = require('./hexToRgb');

const applyOpacityModifiers = (color, label, values) => {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) =>
      [`${label}/${key}`, `rgb(${color.r} ${color.g} ${color.b} / ${value})`]
      )
  );
}

const formatColors = (colors = {}, opacityValues = {}) => {
  let formatted = {};
  for(let[label, color] of Object.entries(colors)) {
    if(typeof color === 'string') {
      let rgb = hexToRgb(color);
      formatted = {
        ...formatted,
        ...{[label]: `rgb(${rgb.r} ${rgb.g} ${rgb.b} / 100)`},
        ...applyOpacityModifiers(rgb, label, opacityValues)
      }
    }
    else {
      let palette = {};
      for(let[tone, value] of Object.entries(color)) {
        let rgb = hexToRgb(value);
        palette[label] = {
          ...palette[label],
          ...{[tone]: `rgb(${rgb.r} ${rgb.g} ${rgb.b} / 100)`},
          ...applyOpacityModifiers(rgb, tone, opacityValues)
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

const createColorUtilities = (colors = {}, property) => {
  return Object.fromEntries(
    Object.entries(colors).map(([key, value]) =>
      typeof value === 'string'
      ? [key, {[property]: value}]
      : [key, Object.fromEntries(Object.entries(value).map(([key, value]) =>
        [key, {[property]: value}]))
      ])
  );
}

const formatOpacity = (opacityValues = {}) => {
  return Object.fromEntries(
    Object.entries(opacityValues).map(([key, value]) =>
      [key, {opacity: value}]
    )
  );
}

module.exports = {
  formatColors: formatColors,
  formatOpacity: formatOpacity,
  createColorUtilities: createColorUtilities
};
