const { invokeCommand, logSuccessInfo, logProcessInfo, displayError } = require('./utils');


function dumpLibraryVersion() {
  const rank = process.argv[process.argv.indexOf('--rank') + 1];
  const availableRanks = ['prepatch', 'patch', 'minor', 'major'];

  if (!rank) {
    displayError('The dump of the library version has been failed', 'No "rank" argument has been provided');
  } else if (!availableRanks.includes(rank)) {
    displayError('The dump of the library version has been failed', 'The "rank" argument must be one of ' + availableRanks);
  } else {
    logProcessInfo('Dump library version. Argument: ' + rank);
    invokeCommand('npm version ' + rank, 'The dump of the library version has been failed', logSuccessDump);
  }
}

function logSuccessDump() {
  logSuccessInfo(`The dump of library version has been successfully completed`);
}

dumpLibraryVersion();
