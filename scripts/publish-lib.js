const { invokeCommand, logSuccessInfo, logProcessInfo } = require('./utils');
const libVersion = require('../src/app/library/package.json').version;

function publishLibrary() {
  const isDev = process.argv[process.argv.indexOf('--develop') + 1];
  logProcessInfo(`Publish library version ${libVersion} to github`);

  const command = 'cd dist && npm publish' + isDev? ' --tag=develop': "";
  invokeCommand(
    'cd dist && npm publish',
    'The publishing of the library has been failed',
    logSuccessPublish,
  )
}

function logSuccessPublish() {
  logSuccessInfo(`The publish version ${libVersion} has been successfully completed`);
}

publishLibrary();
