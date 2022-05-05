const formatClassName = require('./utils/formatClassName');

const create = ({rules}) => {
  style = {};
  for (let [className, rule] of Object.entries(rules)) {
    let formattedClass = formatClassName(className).replace('.', '\\.')
      .replace('/', '\\/');
    style[`.${formattedClass}`] = rule;
  }
  return style;
};

module.exports = create;
