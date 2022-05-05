const parseUtilities = require('../parseUtilities');
const typography = require('./typography');
const spacing = require('./spacing');
const sizing = require('./sizing');
const flex = require('./flex');
const formatColors = require('../formatColors');
const border = require('./border');
const grid = require('./grid');

const colors = {
  ...formatColors(require('./colors')),
  ...{
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
  }
};


const createColorUtilities = (property) => {
  return Object.fromEntries(
    Object.entries(colors).map(([key, value]) =>
      typeof value === 'string'
      ? [key, {[property]: value}]
      : [key, Object.fromEntries(Object.entries(value).map(([key, value]) =>
        [key, {[property]: value}]))
      ])
  );
}

const opacity = Object.fromEntries(
  Object.entries(require('./opacity')).map(([key, value]) =>
    [key, {opacity: value}]
  )
);

// Create text colors.
const textColors = createColorUtilities('color');

// Create border colors.
const borderColors = createColorUtilities('borderColor');

// Create background colors.
const backgroundColors = createColorUtilities('backgroundColor');
border.border = {...border.border, ...borderColors};
typography.text = {...typography.text, ...textColors};

module.exports = {
  ...typography,
  bg: backgroundColors,
  ...border,
  ...spacing,
  ...sizing,
  ...flex,
  ...grid,
  opacity: opacity,

  block: {display: 'block'},
  inlineBlock: {display: 'inline-block'},
  inlineFlex: {display: 'inline-flex'},
  grid: {display: 'grid'},
  inlineGrid: {display: 'inline-grid'},
  inline: {display: 'inline'},
  hidden: {display: 'none'},
  contents: {display: 'contents'},
  table: {display: 'table'},
  tableCaption: {display: 'table-caption'},
  tableCell: {display: 'table-cell'},
  tableColumn: {display: 'table-column'},
  tableColumnGroup: {display: 'table-column-group'},
  tableHeaderGroup: {display: 'table-header-group'},
  tableFooterGroup: {display: 'table-footer-group'},
  tableRowGroup: {display: 'table-row-group'},
  tableRow: {display: 'table-row'},
  listItem: {display: 'list-item'},

  invisible: {visibility: 'hidden'},
  visible: {visibility: 'visible'},

  aspectAuto: {aspectRatio: 'auto'},
  aspectSquare: {aspectRatio: '1 / 1'},
  aspectWidescreen: {aspectRatio: '16 / 9'},
  aspectFullscreen: {aspectRatio: '4 / 3'},

  boxBorder: {boxSizing: 'border-box'},
  boxContent: {boxSizing: 'content-box'},

  floatRight: {float: 'right'},
  floatLeft: {float: 'left'},
  floatNone: {float: 'none'},

  clearLeft: {clear: 'left'},
  clearRight: {clear: 'right'},
  clearBoth: {clear: 'both'},
  clearNone: {clear: 'none'},

  overflowVisible: {overflow: 'visible'},
  overflowHidden: {overflow: 'hidden'},
  overflowClip: {overflow: 'clip'},
  overflowScroll: {overflow: 'scroll'},
  overflowAuto: {overflow: 'auto'},
  overflowXVisible: {overflowX: 'visible'},
  overflowXHidden: {overflowX: 'hidden'},
  overflowXClip: {overflowX: 'clip'},
  overflowXScroll: {overflowX: 'scroll'},
  overflowXAuto: {overflowX: 'auto'},
  overflowYVisible: {overflowY: 'visible'},
  overflowYHidden: {overflowY: 'hidden'},
  overflowYClip: {overflowY: 'clip'},
  overflowYScroll: {overflowY: 'scroll'},
  overflowYAuto: {overflowY: 'auto'},

  static: {position: 'static'},
  fixed: {position: 'fixed'},
  absolute: {position: 'absolute'},
  relative: {position: 'relative'},
  sticky: {position: 'sticky'},
  top: {top: 0},
  right: {right: 0},
  left: {left: 0},
  bottom: {bottom: 0},

  z: {
    auto: {zIndex: 'auto'},
    0: {zIndex: 0},
    1: {zIndex: 10},
    2: {zIndex: 20},
    3: {zIndex: 30},
    4: {zIndex: 40},
    5: {zIndex: 50},
    10: {zIndex: 100},
  },
  shadow: {boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.11), 0px 1px 2px -1px rgba(0,0,0,0.11)'},
  shadow: {
    sm: {boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.11)'},
    md: {boxShadow: '0px 5px 8px -1px rgba(0,0,0,0.11), 0px 2px 4px -2px rgba(0,0,0,0.11)'},
    lg: {boxShadow: '0px 8px 14px -3px rgba(0,0,0,0.11), 0px 4px 6px -4px rgba(0,0,0,0.11)'},
    xl: {boxShadow: '0px 16px 24px -5px rgba(0,0,0,0.11), 0px 8px 10px -6px rgba(0,0,0,0.11)'}
  },

  cursor: {
    auto: {cursor: 'auto'},
    default: {cursor: 'default'},
    none: {cursor: 'none'},
    contextMenu: {cursor: 'context-menu'},
    help: {cursor: 'help'},
    pointer: {cursor: 'pointer'},
    progress: {cursor: 'progress'},
    wait: {cursor: 'wait'},
    cell: {cursor: 'cell'},
    crosshair: {cursor: 'crosshair'},
    text: {cursor: 'text'},
    verticalText: {cursor: 'vertical-text'},
    alias: {cursor: 'alias'},
    copy: {cursor: 'copy'},
    move: {cursor: 'move'},
    noDrop: {cursor: 'no-drop'},
    notAllowed: {cursor: 'not-allowed'},
    eResize: {cursor: 'e-resize'},
    nResize: {cursor: 'n-resize'},
    neResize: {cursor: 'ne-resize'},
    nwResize: {cursor: 'nw-resize'},
    sResize: {cursor: 's-resize'},
    seResize: {cursor: 'se-resize'},
    swResize: {cursor: 'sw-resize'},
    wResize: {cursor: 'w-resize'},
    ewResize: {cursor: 'ew-resize'},
    nsResize: {cursor: 'ns-resize'},
    neswResize: {cursor: 'nesw-resize'},
    nwseResize: {cursor: 'nwse-resize'},
    colResize: {cursor: 'col-resize'},
    rowResize: {cursor: 'row-resize'},
    allScroll: {cursor: 'all-scroll'},
    zoomIn: {cursor: 'zoom-in'},
    zoomOut: {cursor: 'zoom-out'},
    grab: {cursor: 'grab'},
    grabbing: {cursor: 'grabbing'}
  },

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
}
