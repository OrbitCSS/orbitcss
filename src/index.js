const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const postcssJs = require('postcss-js');
const cssnano = require('cssnano');
const postcssNested = require('postcss-nested');
const fs = require('fs');
const path = require('path');
const arg = require('arg');
const parser = require('postcss-selector-parser');
const help = require('./utils/helpCli');
const parseUtilities = require('./parseUtilities');
const createCss = require('./createCss');
const {createMediaQueries, getMediaClasses} = require('./createMediaQueries');
const {createPseudoCSS, getPseudoClasses} = require('./createPseudoCSS');
const config = require('./getUserConfig');
const getContent = require('./getContent');
const formatClassName = require('./utils/formatClassName');
const fg = require('fast-glob');
const chokidar = require('chokidar');

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

let command = (Object.keys(commands.build.args).includes(process.argv[2])
  ? 'build' : process.argv[2]) || 'build';
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
  process.exit(9);
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

function filterClasses(content) {
  return Object.fromEntries(Object.entries(
    parseUtilities(require('./conf/utilityClasses'))
  ).filter(
    ([k]) => [...content].includes(formatClassName(k).replace('\\', ''))
  ));
}

async function getInputCss(path) {
  const inputFile = await fs.readFileSync(path);
  return postcssJs.objectify(postcss.parse(inputFile));
}

async function createFinalCss({
  content,
  input,
  cssClasses = {},
  mediaClasses = {},
  pseudoClasses = {}
}) {
  cssClasses = {...filterClasses(content), ...cssClasses};
  mediaClasses = getMediaClasses(content, mediaClasses);
  pseudoClasses = getPseudoClasses(content, pseudoClasses);
  let inputCss = input ? await getInputCss(input) : {};

  return {
    css: {
      ...await getInputCss(path.join(__dirname, './css/normalize.css')),
      ...createCss({
        rules: cssClasses
      }),
      ...createMediaQueries(mediaClasses),
      ...createPseudoCSS(pseudoClasses),
      ...inputCss
    },
    classes: {
      cssClasses,
      mediaClasses,
      pseudoClasses
    }
  };
}

async function build() {
  let input = args['--input'];
  let output = args['--output'];
  let min = args['--minimize'] || false;
  let watch = args['--watch'] || false;

  if(output === undefined) {
    let { description, usage } = commands[command];
    help({
      message: "Missing output command. Expects --output OR -o.",
      commands: ["orbitcss build --output <file path>", "orbitcss build -o <file path>"]
    });
    process.exit(9);
  }

  let plugins = [
    autoprefixer,
    postcssNested
  ];
  if(min) {
    plugins.push(cssnano);
  }

  const content = getContent(fg.sync(config.files));
  console.time('Creating CSS');
  const createCss = await createFinalCss({content, input});
  console.timeEnd('Creating CSS');
  let css = createCss.css;

  function runBuild() {
    console.time('Compiling CSS');
    postcss(plugins)
      .process(css, { from: undefined, to: output, parser: postcssJs })
      .then((result) => {
        fs.writeFile(output, result.css, () => true);
        if(result.map) {
          fs.writeFile(`${output}.map`, result.map.toString(), () => true)
        }
      });
    console.timeEnd('Compiling CSS')
  }

  function runWatch() {
    runBuild();
    console.log();
    console.log(`CSS output > ${output}`);
    let existing = createCss.classes;
    const watcher = chokidar.watch(fg.sync(config.files), {
      ignoreInitial: true,
    });
    console.log();
    console.log('Watching for changes...');

    async function rebuild(file) {
      console.log();
      console.log(`Change on ${file}`);
      console.log('Rebuilding...');
      let content = getContent([file]);
      let finalCss = await createFinalCss({content, input, ...existing});
      css = finalCss.css;
      existing = finalCss.classes;
      runBuild();
    }

    watcher.on('add', async(file) => {
      await rebuild(file);
    })
    .on('change', async(file) => {
      console.log(watcher.getWatched())
      await rebuild(file);
    });
  }

  if(watch) {
    runWatch();
  }
  else {
    runBuild();
    console.log();
    console.log(`CSS output > ${output}`);
  }
}

module.exports = run;
