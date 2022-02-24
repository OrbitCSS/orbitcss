const parseUtilities = require('../parseUtilities');

// const colors = parseUtilities(require('./colors'));
// const textColors = Object.fromEntries(
//   Object.entries(colors).map(([key, value]) => ([key, {color: value}]))
// );
//
// console.log(colors);

module.exports = {
  align: {
    baseline: {verticalAlign: 'baseline'},
    top: {verticalAlign: 'top'},
    middle: {verticalAlign: 'middle'},
    bottom: {verticalAlign: 'bottom'},
    textTop: {verticalAlign: 'text-top'},
    textBottom: {verticalAlign: 'text-bottom'},
    sub: {verticalAlign: 'sub'},
    super: {verticalAlign: 'super'}
  },
  text: {
    // ...textColors,
    left: {textAlign: 'left'},
    right: {textAlign: 'right'},
    center: {textAlign: 'center'},
    justify: {textAlign: 'justify'},
  },
  serif: {
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  },
  sans: {
    fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  mono: {
    fontFamily: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  font: {
    base: {fontSize: '1rem', lineHeight: '1.6'},
    xs: {fontSize: '0.75rem', lineHeight: '1.6'},
    s: {fontSize: '0.875rem', lineHeight: '1.6'},
    lg: {fontSize: '1.25rem', lineHeight: '1.6'},
    xl: {fontSize: '1.5rem', lineHeight: '1.6'},
    '2xl': {fontSize: '1.875rem', lineHeight: '1.6'},
    '3xl': {fontSize: '2rem', lineHeight: '1.6'},
    '4xl': {fontSize: '2.25rem', lineHeight: '1.6'}
  },
  nonItalic: {fontStyle: 'normal'},
  italic: {fontStyle: 'italic'},
  weight: {
    thin: {fontWeight: 100},
    extralight: {fontWeight: 200},
    light: {fontWeight: 300},
    normal: {fontWeight: 400},
    medium: {fontWeight: 500},
    semibold: {fontWeight: 600},
    bold: {fontWeight: 700},
    extrabold: {fontWeight: 800},
    black: {fontWeight: 900}
  },
  line: {
    0: {lineHeight: '1'},
    xs: {lineHeight: '1.2'},
    sm: {lineHeight: '1.375'},
    base: {lineHeight: '1.5'},
    lg: {lineHeight: '1.625'},
    xl: {lineHeight: '2'}
  },
  overline: {textDecorationLine: 'overline', color: 'red'},
  underline: {textDecorationLine: 'underline'},
  lineThrough: {textDecorationLine: 'line-through'},
  noUnderline: {textDecorationLine: 'none'},
  decoration: {
    style: {
      solid: {textDecorationStyle: 'solid'},
      double: {textDecorationStyle: 'double'},
      dotted: {textDecorationStyle: 'dotted'},
      dashed: {textDecorationStyle: 'dashed'},
      wavy: {textDecorationStyle: 'wavy'}
    }
  }
}
