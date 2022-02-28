const parse = (styles) => {
  let result = {};
  for(let [namespace, value] of Object.entries(styles)) {
    if(typeof value === 'object') {
      for(let [key, rules] of Object.entries(value)) {
        if(typeof rules === 'object') {
          if(typeof rules[Object.keys(rules)[0]] === 'object') {
            result = {...result, ...parse({[`${namespace}-${key}`]: rules})};
          }
          else {
            result[`${namespace}-${key}`] = rules;
          }
        }
        else if(typeof rules === 'string') {
          result[`${namespace}`] = {...result[`${namespace}`], ...{[key]: rules}};
        }
        else {
          result[`${namespace}`] = rules;
        }
      }
    }
    else {
      result[namespace] = value;
    }
  }
  return result;
}

module.exports = parse;
