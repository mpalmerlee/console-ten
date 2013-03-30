#!/usr/bin/env node

var consoleTEN = require('../');
consoleTEN.init(console, consoleTEN.LEVELS.WARNING);

console.error('This should be shown.');
console.warn('This also should show up.');
console.log('WE ARE AT LOG LEVEL WARNING, console.log SHOULDN\'T SHOW UP!');

