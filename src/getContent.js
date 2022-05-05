const fs = require('fs');
const extractor = require('./utils/extractor');

const getContent = (files) => {
  const content = new Set();
  for(let file of files) {
    let fileContents = fs.readFileSync(file, 'utf8');
    for (let line of fileContents.split('\n')) {
      line = [...new Set(extractor(line.trim()))];
      for (let string of line) {
        content.add(string);
      }
    }
  }
  return content;
}

module.exports = getContent;
