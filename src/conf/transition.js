module.exports = {
  transition: {
    none: {transitionProperty: 'none'},
    all: {transitionProperty: 'all', transitionTimingFunction: 'ease', transitionDuration: '300ms'},
    colors: {transitionProperty: 'color, background-color, border-color', transitionTimingFunction: 'ease', transitionDuration: '300ms'},
    backgroundColor: {transitionProperty: 'background-color', transitionTimingFunction: 'ease', transitionDuration: '300ms'},
    borderColor: {transitionProperty: 'border-color', transitionTimingFunction: 'ease', transitionDuration: '300ms'},
    color: {transitionProperty: 'color', transitionTimingFunction: 'ease', transitionDuration: '300ms'},
    opacity: {transitionProperty: 'opacity', transitionTimingFunction: 'ease', transitionDuration: '300ms'},
    shadow: {transitionProperty: 'box-shadow', transitionTimingFunction: 'ease', transitionDuration: '300ms'},
    transform: {transitionProperty: 'transform', transitionTimingFunction: 'ease', transitionDuration: '300ms'},
  },

  duration: {
    100: {transitionDuration: '100ms'},
    150: {transitionDuration: '150ms'},
    200: {transitionDuration: '200ms'},
    250: {transitionDuration: '250ms'},
    300: {transitionDuration: '300ms'},
    500: {transitionDuration: '500ms'},
    750: {transitionDuration: '750ms'},
    1000: {transitionDuration: '1s'}
  }
};
