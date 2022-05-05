
const typography = {
  text: {
    left: {textAlign: 'left'},
    right: {textAlign: 'right'},
    center: {textAlign: 'center'},
    justify: {textAlign: 'justify'},
  },
  font: {
    xs: {fontSize: '0.75rem', lineHeight: '1.25rem'},
    s: {fontSize: '0.875rem', lineHeight: '1.25rem'},
    base: {fontSize: '1rem', lineHeight: '1.5rem'},
    lg: {fontSize: '1.25rem', lineHeight: '1.75rem'},
    xl: {fontSize: '1.5rem', lineHeight: '2rem'},
    '2xl': {fontSize: '1.75rem', lineHeight: '2.25rem'},
    '3xl': {fontSize: '2rem', lineHeight: '2.5rem'},
    '4xl': {fontSize: '2.25rem', lineHeight: '2.5rem'},
    '5xl': {fontSize: '2.5rem', lineHeight: '2.75rem'},
    '6xl': {fontSize: '3rem', lineHeight: 1}
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
  serif: {
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  },
  sans: {
    fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  mono: {
    fontFamily: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
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
  },
  list: {
    none: {listStyleType: 'none'},
    disc: {listStyleType: 'disc'},
    circle: {listStyleType: 'circle'},
    decimal: {listStyleType: 'decimal'},
    square: {listStyleType: 'square'},
    inside: {listStylePosition: 'inside'},
    outside: {listStylePosition: 'outside'}
  },
  uppercase: {textTransform: 'uppercase'},
  lowercase: {textTransform: 'lowercase'},
  capitalize: {textTransform: 'capitalize'},
  wrap: {whiteSpace: 'normal'},
  nowrap: {whiteSpace: 'nowrap'},
  pre: {whiteSpace: 'pre'},
  preLine: {whiteSpace: 'pre-line'},
  preWrap: {whiteSpace: 'pre-wrap'},

  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
}

module.exports = typography;
