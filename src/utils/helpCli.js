const packageJson = require('../../package.json');
const chalk = require('chalk');

const help = ({ message, usage = {}, commands = {}, options = {} }) => {
  console.log();
  console.log(chalk.hex('#6e45e2')(`OrbitCSS v${packageJson.version}`));

  console.log();

  for(let msg of message.split('\n')) {
    console.log(msg);
  }

  if(usage.length > 0) {
    console.log();
    console.log('Usage:');
    console.log();
    for(let item of usage) {
      console.log(`   ${item}`);
    }
  }

  if(commands.length > 0) {
    console.log();
    console.log('Commands:');
    console.log();
    for (let command of commands) {
      console.log(`  ${command}`);
    }
  }

  if(options) {
    console.log();
    console.log('Options:');
    console.log();

    let helpOptions = {};
    for (let [key, value] of Object.entries(options)) {
      if(typeof value === 'object') {
        helpOptions[key] = { ...value, flags: [key] };
      }
      else {
        helpOptions[value].flags.push(key);
      }
    }

    for (let {flags, description} of Object.values(helpOptions)) {
      console.log(`  ${flags.reverse().join('|').padEnd(20, ' ')}`, description);
    }
  }
}

module.exports = help;
