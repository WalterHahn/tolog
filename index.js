const fs = require('fs');
const moment = require('moment');

var stream = null;
var logToConsole = false;

function init(options) {
  try {
    stream = fs.createWriteStream(options.path || './to.log', { flags: 'a' });
    logToConsole = options.logToConsole || false;
  } catch (err) {
    console.log(err);
  }
}

function close() {
  stream.end();
  stream = null;
}

function log(context, msg) {
  if (logToConsole)
    console.log(`${context} ${msg}`);
  if (stream) {
    try {
      stream.write(`${moment().format()} ${context} ${msg}\n`)
    } catch(err) {
      console.log(err);
    }
  }
}

function info(msg) {
  log('info', msg);
}

function error(msg) {
  log('error', msg);
}

module.exports = {
  start: init,
  end: close,
  log: log,
  info: info,
  error: error
};
