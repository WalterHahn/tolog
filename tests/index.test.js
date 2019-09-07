const fs = require('fs');

var tolog = require('../index');

const defaultLogPath = './to.log';

test('write and read info', async () => {
  await new Promise((resolve) => {
    tolog.start({
      logToConsole: true
    });
  
    tolog.info('foo');
    tolog.end();
  
    fs.readFile(defaultLogPath, 'utf-8', (err, file) => {
      var lines = file.toString().split("\n");
      expect(lines[lines.length - 2].indexOf('info goo')).toBe(-1);
      expect(lines[lines.length - 2].indexOf('info foo')).not.toBe(-1);
      fs.unlinkSync(defaultLogPath);

      resolve(1);
    });
  });
});

test('write and read error on custom path', async () => {
  await new Promise((resolve) => {
    tolog.start({
      logToConsole: true,
      path: './error.log'
    });

    tolog.error('foo');
    tolog.end();

    fs.readFile('./error.log', 'utf-8', (err, file) => {
      var lines = file.toString().split("\n");
      expect(lines[lines.length - 2].indexOf('error goo')).toBe(-1);
      expect(lines[lines.length - 2].indexOf('error foo')).not.toBe(-1);
      fs.unlinkSync('./error.log');

      resolve(1);
    });
  });
});

test('write and read custom context', async () => {
  await new Promise((resolve) => {
    tolog.start({
      logToConsole: true,
      path: defaultLogPath
    });
  
    tolog.log('foo', 'bar');
    tolog.end();
  
    fs.readFile(defaultLogPath, 'utf-8', (err, file) => {
      var lines = file.toString().split("\n");
      expect(lines[lines.length - 2].indexOf('foo car')).toBe(-1);
      expect(lines[lines.length - 2].indexOf('foo bar')).not.toBe(-1);
      fs.unlinkSync(defaultLogPath);

      resolve(1);
    });
  });
});
