const flex = {
  flex: {
    display: 'flex',
    auto: {flex: 'auto'},
    initial: {flex: 'initial'},
    none: {flex: 'none'},
    1: {flex: 1},

    row: {flexDirection: 'row'},
    rowReverse: {flexDirection: 'row-reverse'},
    column: {flexDirection: 'column'},
    columnReverse: {flexDirection: 'column-reverse'},

    wrap: {flexWrap: 'wrap'},
    wrapReverse: {flexWrap: 'wrap-reverse'},
    nowrap: {flexWrap: 'nowrap'},
  },
  align: {
    items: {
      stretch: {alignItems: 'stretch'},
      center: {alignItems: 'center'},
      start: {alignItems: 'flex-start'},
      end: {alignItems: 'flex-end'},
      baseline: {alignItems: 'baseline'}
    }
  },
  justify: {
    start: {justifyContent: 'flex-start'},
    end: {justifyContent: 'flex-end'},
    center: {justifyContent: 'center'},
    between: {justifyContent: 'space-between'},
    around: {justifyContent: 'space-around'},
    evenly: {justifyContent: 'space-evenly'}
  }
};

module.exports = flex;
