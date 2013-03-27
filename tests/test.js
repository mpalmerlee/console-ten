#!/usr/bin/env node

var consoleTEN = require('../');
consoleTEN.init(console);

['debug'].forEach(function(f) {
  console[f]('Hello Console-TEN!', {'testing':f});
});