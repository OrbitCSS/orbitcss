const getPotentialStyles = (content, data) => {

  if(!(data instanceof Array)) {
    data = Object.keys(data);
  }

  return [...content].filter(
    (str) => data.some(substr => str.startsWith(`${substr}:`))
  )
}

module.exports = getPotentialStyles;
