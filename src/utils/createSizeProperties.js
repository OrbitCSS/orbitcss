const createSizeProperties = (properties, sizes) => {
  return Object.fromEntries(
    Object.entries(sizes).map(([key, value]) => {
      if(typeof properties === 'string') {
        return [key, {[properties]: value}];
      }
      else {
        return [key, Object.fromEntries(properties.map((property) => [property, value]))];
      }
    })
  );
}

module.exports = createSizeProperties;
