const pseudo = require('./conf/pseudo');
const parseUtilities = require('./parseUtilities');
const getPotentialStyles = require('./getPotentialStyles');
const formatClassName = require('./utils/formatClassName');
const createCss = require('./createCss');

const getPseudoLabel = (property) => {
  for(let [type, labels] of Object.entries(pseudo)) {
    for(let [i, label] of Object.entries(labels)) {
      if(label === property) {
        return type === 'classes' ? `:${label}` : `::${label}`;
      }
      else if(typeof label === 'object') {
        if(label[property] !== undefined) {
          return type === 'classes' ? `:${label[property]}` : `::${label[property]}`;
        }
      }
    }
  }
  return false;
}

const getPseudoClasses = (content, existingClasses = {}) => {
  let potentialStyles = {};
  getPotentialStyles(content,
    [...pseudo.classes, ...pseudo.elements].map(i => typeof i === 'object' ? Object.keys(i)[0] : i)
  ).forEach(k => {
    let match = k.match(/^(?<pseudo>[a-zA-Z\d\-]+)[\:]{1}(?<class>.*)$/)['groups'] || {};
    if(match.pseudo !== undefined && match.class !== undefined) {
      potentialStyles[match.pseudo] = [...potentialStyles[match.pseudo] || [], ...[match.class.replace('\\', '')]]
    }
  });
  if(existingClasses.length) {
    potentialStyles = Object.fromEntries(
      Object.entries(potentialStyles)
        .map(([key, value]) => [key,
          existingClasses[key]
            ? [...new Set([...value, ...existingClasses[key]])]
            : value
        ])
    )
  }
  return potentialStyles;
}

const createPseudoCSS = (pseudoClasses) => {
  let utilityClasses = parseUtilities(require('./conf/utilityClasses'));
  let css = {};

  for(let [label, classes] of Object.entries(pseudoClasses)) {
    let property = getPseudoLabel(label);
    let styles = Object.fromEntries(Object.entries(utilityClasses).filter(
      ([k]) => [...classes].includes(formatClassName(k).replace('\\', ''))
    ));
    if(styles.length < 1) {
      continue;
    }
    css = {...css, ...createCss({
      rules: Object.fromEntries(
        Object.entries(styles)
          .map(([key, value]) => {
            return [`${label}\\:${key}${property}`, value];
          })
      )
    })};
  }

  return css;
};

module.exports = {
  createPseudoCSS,
  getPseudoClasses
};
