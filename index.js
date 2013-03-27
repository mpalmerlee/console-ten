/**
 * Console TEN (Console Timestamp Extension for Node)
 * This is a simple extension on top of console.log type functions
 *      It's main purpose is to prepend everything logged with a timestamp and a log type
 *      Tt also allows users to disable some logging by setting a log level
 */

var TYPES = [
    {n:'ERROR',l:1,f:'error'},
    {n:'WARNING',l:2,f:'warn'},
    {n:'LOG',l:3,f:'log'}, //considered "NOTICE" loglevel?
    {n:'INFO',l:4,f:'info'},
    {n:'TRACE',l:5,f:'trace'},
    {n:'DEBUG',l:6,f:'debug'}
];

exports.init = function(consoleObj, loglevel){
    loglevel = loglevel || TYPES.length;
    TYPES.forEach(function(td){
        var orig = consoleObj[td.f];
        consoleObj[td.f] = function(){
            if(loglevel < td.l)
                return;
            [].unshift.call(arguments, (new Date().toISOString()) + " [" + td.n + "] : ");
            return orig.apply(consoleObj, arguments);
        }
    });
};

/*

exports.error = function(){
    [].unshift.call(arguments, TYPES.ERROR);
    return toLog.apply(null, arguments);
};

exports.warn = function(){
    [].unshift.call(arguments, TYPES.WARNING);
    return toLog.apply(null, arguments);
};

exports.debug = function(){
    [].unshift.call(arguments, TYPES.DEBUG);
    return toLog.apply(null, arguments);
};

exports.trace = function(){
    [].unshift.call(arguments, TYPES.TRACE);
    return toLog.apply(null, arguments);
};

var info = function(){
    [].unshift.call(arguments, TYPES.INFO);
    return toLog.apply(null, arguments);
};
exports.info = info;
exports.log = info;

var TYPES = {
    'ERROR':1,
    'WARNING':2,
    'DEBUG':3,
    'TRACE':4,
    'INFO':5
};

//for toString lookups on type (too bad there isn't a cleaner way!)
var typeToString = function(type){
    switch(type){
        case TYPES.ERROR:
            return "ERROR";
            break;
        case TYPES.WARNING:
            return "WARNING";
            break;
        case TYPES.DEBUG:
            return "DEBUG";
            break;
        case TYPES.TRACE:
            return "TRACE";
            break;
        default:
            return "INFO";
            break;
    }
};

var toLog = function(type){
    if(!arguments.length || arguments.length <= 1){
        throw new TypeError("logger must take at least two arguments!");
    }
    var newArgs = [].slice.call(arguments).slice(1);
    newArgs[0] = (new Date().toISOString()) + " [" + typeToString(type) + "] : " + newArgs[0];

    switch(type){
        case TYPES.ERROR:
            console.error.apply(null, newArgs);
            break;
        case TYPES.WARNING:
            console.warn.apply(null, newArgs);
            break;
        case TYPES.DEBUG:
            console.debug.apply(null, newArgs);
            break;
        case TYPES.TRACE:
            console.trace.apply(null, newArgs);
            break;
        case TYPES.INFO:
            console.info.apply(null, newArgs);
            break;
        default:
            console.log.apply(null, newArgs);
            break;
    }
    return;
};

*/