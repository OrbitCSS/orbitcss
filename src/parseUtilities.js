const parse = (styles) => {
  let result = {};
  for(let [namespace, value] of Object.entries(styles)) {
    if(typeof value === 'object') {
      for(let [key, rules] of Object.entries(value)) {
        if(typeof rules === 'object') {
          console.log(parse(rules))
          result[`${namespace}-${key}`] = parse({...rules});
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
