const patterns = [
  /([^"'`\s]+[^"'`\s])/.source
].join('|');

const extractor = (content) => {
  return [
    ...content.matchAll(new RegExp(patterns, 'g'))
  ]
    .flat().filter((v) => v !== undefined);
}

module.exports = extractor;
