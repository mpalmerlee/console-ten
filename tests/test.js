#!/usr/bin/env node

var consoleTEN = require('../');
consoleTEN.init(console);

['error','warn','log','info','trace','debug'].forEach(function(f) {
  console[f]('Hello Console-TEN!', {'testing':f});
});

console.log("Hello %s", "node", "...that string was formatted with %s", 'it should not say "Hello %s"');
console.log({'i':'am','an':'object'}, "...and I am a string!");