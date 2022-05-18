const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

const nestedMerge = (mergeWith, ...source) => {
  if(!source.length) {
    return mergeWith
  }
  const data = source.shift();
  if(isObject(data)) {
    for(let key in data) {
      if(isObject(data[key])) {
        if(!mergeWith[key]) {
          Object.assign(mergeWith, {[key]: {}});
        }
        nestedMerge(mergeWith[key], data[key]);
      }
      else {
        Object.assign(mergeWith, {
          [key]: data[key]
        });
      }
    }
  }

  return nestedMerge(mergeWith, ...source);
}

module.exports = nestedMerge;
