console-ten
===========

Console-TEN is a simple console Timestamp Extension for Node.js

It prepends a timestamp and log type for console.log type functions (error, warn, info, log)
Tt also allows disabling some logging by setting a log level

Install
-------

> npm install console-ten

Usage
-----

> require('../').init(console);
> console.log("Hello Node!", {'i':'love','json':'!'});

Example Output
--------------

> 2013-01-01T00:00:00.000Z [LOG] :  Hello Node! { i: 'love', json: '!' }

