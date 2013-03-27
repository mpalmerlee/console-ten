/**
 * Console TEN (Console Timestamp Extension for Node)
 * This is a simple extension on top of console.log type functions
 *      It's main purpose is to prepend everything logged with a timestamp and a log type
 *      Tt also allows users to disable some logging by setting a log level
 */

//NOTE: console.trace currently calls console.error so we won't override that
var overrides = [
    {n:'DEBUG',l:5,f:'debug',p:'log'},//NOTE: console.debug is deprecated so we'll call console.log

    {n:'ERROR',l:1,f:'error',p:'error'},
    {n:'WARNING',l:2,f:'warn',p:'warn'},
    {n:'LOG',l:3,f:'log',p:'log'}, //considered "NOTICE" loglevel?
    {n:'INFO',l:4,f:'info',p:'info'}
];

var LEVELS = {
    'ERROR':1,
    'WARNING':2,
    'LOG':3,
    'INFO':4,
    'DEBUG':5,
    'ALL':6,
};

exports.LEVELS = LEVELS;

exports.init = function(consoleObj, loglevel){
    loglevel = loglevel || LEVELS.ALL;
    overrides.forEach(function(td){
        var orig = consoleObj[td.p];
        consoleObj[td.f] = function(){
            if(loglevel < td.l)
                return;
            [].unshift.call(arguments, (new Date().toISOString()) + " [" + td.n + "] : ");
            return orig.apply(consoleObj, arguments);
        }
    });
};
