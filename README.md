console-ten
===========

Console-TEN is a simple console Timestamp Extension for Node.js

It prepends a timestamp and log type for console.log type functions (error, warn, info, log).
It also allows disabling some logging by setting a log level.

Install
-------
```bash
> npm install console-ten
```

Usage
-----
```javascript
require('console-ten').init(console);
console.log("Hello %s", "Node!", {'i':'love','json':'!'});
```

Example Output
--------------
```bash
> [2013-01-01T00:00:00.000Z] [LOG] Hello Node! { i: 'love', json: '!' }
```

Log Levels
----------
Console-TEN will default to show all logs, you can limit which logs are shown by passing in a level in the init method:

```javascript
var consoleTEN = require('console-ten');
consoleTEN.init(console, consoleTEN.LEVELS.LOG);
console.log("This will be sent to the console.");
console.info("But this will not be shown.");
```

Here are the log levels currently defined:

```javascript
LEVELS = {
    'ERROR':1,
    'WARNING':2,
    'LOG':3,
    'INFO':4,
    'DEBUG':5,
    'ALL':6,
};
```

Overridden Console Functions
----------------------------
The above log levels correspond to the following console functions:
```javascript
console.error
console.warn
console.log
console.info
console.debug
```

Unit testing and console.debug
------------------------------
Since console.debug is not a standard NodeJS function, you may run into problems in situations (such as in unit testing) where you do not want to initialize the Console-TEN module, yet your code may call console.debug.  To work around this, simply create a dummy console.debug function in a file such as console_init.js:
```javascript
console.debug = function(){};
```
Unit testing frameworks such as Mocha allow you to "--require" additional scripts when executing from the command line:
```bash
mocha -r "console_init" unit_test_file.js
```

Custom log format
-----------------
You can easily override or customize the format and the information appended to the console.log functions by passing a format function to the init method:
```javascript
var consoleTEN = require('console-ten');
consoleTEN.init(console, consoleTEN.LEVELS.ALL, function(levelName){
	return "[" + (new Date().toString()) + "] [" + levelName.toLowerCase() + "] - ";
});
```
Note: the levelName is passed into the format function by default.
After applying this new format function our output looks more like this:
```bash
> [Sat Mar 30 2013 15:54:08 GMT-0700 (PDT)] [error] Hello Node! { i: 'love', json: '!' }
```

Modify Express logs to match Console-TEN
----------------------------------------
If you use the Express web application framework, you'll want to modify the default log format for Express to match the format in Console-TEN so that your log files are readily parsable, this can easily be done with the following code:

```javascript
express.logger.token('zdate', function() { return new Date().toISOString(); });
app.use(express.logger('[:zdate] [WEBLOG] :remote-addr - - ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));
```

License
-------
MIT Licensed
