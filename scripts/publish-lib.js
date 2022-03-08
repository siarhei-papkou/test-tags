const { invokeCommand, logSuccessInfo, logProcessInfo } = require('./utils');
const libVersion = require('../package.json').version;

function publishLibrary() {
  console.log(process.argv);

  const isDev = process.argv.indexOf('--develop') > 0
  logProcessInfo(`Publish library version ${libVersion} to github`);

  const command = 'cd dist && npm publish' + (isDev? ' --tag=develop': "");
  console.log(command);
  invokeCommand(
      command,
    'The publishing of the library has been failed',
    logSuccessPublish,
  )
}

function logSuccessPublish() {
  logSuccessInfo(`The publish version ${libVersion} has been successfully completed`);
}

publishLibrary();
