#!/usr/bin/env node

var consoleTEN = require('../');
consoleTEN.init(console, consoleTEN.LEVELS.ALL, function(levelName){
	return "[" + (new Date().toString()) + "] [" + levelName.toLowerCase() + "] - ";
});

console.error('Testing custom log format function.');
console.warn('You should be able to specify this function however you like');