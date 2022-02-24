function formatClassName(str) {
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
}

const create = ({rules}) => {
  style = {};
  for (let [className, rule] of Object.entries(rules)) {
    style[`.${formatClassName(className)}`] = rule;
  }
  return style;
};

module.exports = create;
