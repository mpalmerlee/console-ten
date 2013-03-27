#!/usr/bin/env node

var consoleTEN = require('../');
consoleTEN.init(console);

['log', 'info', 'warn', 'trace', 'debug', 'error'].forEach(function(f) {
  console[f]('Hello Console-TEN!', {'testing':f});
});