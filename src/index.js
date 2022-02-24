const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const postcssJs = require('postcss-js');
const cssnano = require('cssnano');
const postcssNested = require('postcss-nested');
const fs = require('fs').promises;
const arg = require('arg');
const parser = require('postcss-selector-parser');
const help = require('./utils/helpCli');
const parseUtilities = require('./parseUtilities');
const createCss = require('./createCss');



let sharedFlags = {
  '--help': {type: Boolean, description: 'Displays usage and additional options for the command'},
  '-h': '--help'
};

let commands = {
  build: {
    run: build,
    description: 'Build the OrbitCSS style scripts',
    usage: [
      'orbitcss build [options]'
    ],
    args: {
      '--input': { type: String, description: 'Input file path'},
      '--output': { type: String, description: 'Output file path' },
      '--watch': { type: Boolean, description: 'Watches for changes and rebuilds'},
      '--minimize': { type: Boolean, description: 'Final CSS output will be minimized'},
      '-i': '--input',
      '-o': '--output',
      '-w': '--watch',
      '-m': '--minimize',
      ...sharedFlags
    }
  }
}

let command = process.argv[2] || 'build';

if(commands[command] === undefined) {
  help({
    message: `Invalid command ${command}`,
    usage: [
      'orbitcss <command> [options]'
    ],
    commands: Object.keys(commands)
        .map((command) => `${command} [options]`),
    options: sharedFlags
  })
  process.exit(1);
}

let { args: flags, run } = commands[command];
let args = (() => {
  let result = arg(
    Object.fromEntries(
      Object.entries(flags)
        .map(([key, value]) => [key, typeof value === 'object' ? value.type : value])
      ),
    { permissive: true }
  )
  return result;
})();

if(args['--help']) {
  let { description, usage } = commands[command];
  help({
    message: description,
    usage: usage,
    options: flags
  });
  process.exit(0);
}

async function getInputCss(path) {
  let inputFile = await fs.readFile(path);
  return postcssJs.objectify(postcss.parse(inputFile));
}

async function build() {
  let input = args['--input'];
  let output = args['--output'];
  let min = args['--minimize'];

  let plugins = [
    autoprefixer,
    postcssNested
  ];
  if(min) {
    plugins.push(cssnano);
  }

  const utilityClasses = require('./conf/utilityClasses');

  const style = parseUtilities(utilityClasses);

  const css = createCss({
    rules: style
  });

  const finalCss = input ? {...css, ...await getInputCss(input)} : css;

  postcss(plugins)
    .process(finalCss, { from: undefined, to: output, parser: postcssJs })
    .then((result) => {
      fs.writeFile(output, result.css, () => true);
      if(result.map) {
        fs.writeFile(`${output}.map`, result.map.toString(), () => true)
      }
    });
}

module.exports = run;
