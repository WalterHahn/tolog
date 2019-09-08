# tolog

Logs messages to files.

## Installation

```javascript
npm install @darthhahn/tolog
```

## Usage

To start logging, run the start method.  This will initialize options and open the file stream.

```javascript
var tolog require('../index');

tolog.start({
    path: './to.log',
    logToConsole: true
});
```

There are multiple methods available for logging.  Each method prepends the date and time to each appended line in the format `2019-01-11T00:00:00-07:00`.

```javascript
// appends `$date info foo` to log file
tolog.info('foo');

// appends `$date error bar` to log file
tolog.error('bar');
```

Logging with custom context is also supported.

```javascript
// appends `$date foo bar` to log file
tolog.log('foo', 'bar');
```

To stop logging to file, execute the end method.

```javascript
tolog.end();
```



## Options

| Option       | Default  |                                                 |
| ------------ | -------- | ----------------------------------------------- |
| logToConsole | false    | If true, messages will log to file and console. |
| path         | ./to.log | File path of log file.                          |



## Testing

**tolog** uses the [jest](https://jestjs.io/) framework.  To execute all tests, run `npm test`.
