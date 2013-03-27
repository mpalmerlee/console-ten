#!/usr/bin/env node

var consoleTEN = require('../');
consoleTEN.init(console);

['error','warn','log','info','trace','debug'].forEach(function(f) {
  console[f]('Hello Console-TEN!', {'testing':f});
});