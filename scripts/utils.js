const cmd = require('node-cmd');
const consoleColor = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[36m',
  black: '\x1b[30m',
}

function invokeCommand(command, errorMessage, callback) {
  cmd.get(command, (error) => {
    if (error) {
      displayError(errorMessage, error);
    } else if (typeof callback === 'function') {
      callback();
    }
  });
}

function displayError(errorTitle, errorMessage) {
  console.error(consoleColor.red, `
    ---------------------------------------------------------
        ${errorTitle}
    ---------------------------------------------------------
    Reason: ${errorMessage}
    `);
  console.log(consoleColor.black, '');
  process.exit(1);
}

function logProcessInfo(processMessage) {
  console.log(consoleColor.blue, processMessage);
  console.log(consoleColor.black, '');
}

function logSuccessInfo(message) {
  console.log(consoleColor.green, message);
  console.log(consoleColor.black, '');
}


module.exports = {
  invokeCommand,
  displayError,
  consoleColor,
  logProcessInfo,
  logSuccessInfo,
};
