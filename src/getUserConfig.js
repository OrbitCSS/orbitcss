const fs = require('fs');
const path = require('path');
const userConfigPath = './orbitcss.config.js';

const resolve = () => {
  try {
    const configPath = path.resolve(userConfigPath);
    fs.accessSync(configPath);
    return require(configPath);
  }
  catch (err) {
    return {};
  };
}

const getUserConfig = () => {
  return resolve();
}

module.exports = getUserConfig();
