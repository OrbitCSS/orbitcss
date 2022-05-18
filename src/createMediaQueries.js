const breakpoints = require('./conf/breakpoints');
const parseUtilities = require('./parseUtilities');
const formatClassName = require('./utils/formatClassName');
const createCss = require('./createCss');
const getPotentialStyles = require('./getPotentialStyles');

const createMediaAttribute = (breakpoint) => {
  let mediaAttribute = [];
  for(let [feature, value] of Object.entries(breakpoint)) {
    if(feature === 'type') {
      mediaAttribute.push(value);
    }
    else {
      mediaAttribute.push(`(${formatClassName(feature)}: ${value})`)
    }
  }
  return `@media ${mediaAttribute.join(' and ')}`;
}

const getMediaClasses = (content, existingClassess = {}) => {
  let potentialStyles = existingClassess;
  if(Object.keys(potentialStyles).length < 1) {
    for(let [size, width] of Object.entries(breakpoints)) {
      potentialStyles[size] = [];
    }
  }
  getPotentialStyles(content, breakpoints).forEach(k => {
    let match = k.match(/^(?<breakpoint>[a-zA-Z\d]+)[\:]{1}(?<class>.*)$/)['groups'] || {};
    if(match.breakpoint !== undefined && match.class !== undefined) {
      potentialStyles[match.breakpoint] = [
        ...new Set([...potentialStyles[match.breakpoint] || [], ...[match.class]])
      ]
    }
  });
  return potentialStyles;
}

const createMediaQueries = (mediaClasses) => {
  let utilityClasses = parseUtilities(require('./conf/utilityClasses'));
  let mediaQueries = {};

  for(let [size, classes] of Object.entries(mediaClasses)) {
    let styles = Object.fromEntries(Object.entries(utilityClasses).filter(
      ([k]) => [...classes].includes(formatClassName(k))
    ));
    if(styles.length < 1) {
      continue;
    }
    let css = createCss({
      rules: Object.fromEntries(
        Object.entries(styles)
          .map(([key, value]) => [`${size}\\:${key}`, value])
      )
    });
    mediaQueries[createMediaAttribute(breakpoints[size])] = css;
  }

  return mediaQueries;
}

module.exports = {
  createMediaQueries,
  getMediaClasses
}
