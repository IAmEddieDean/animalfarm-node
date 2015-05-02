'use strict';

var Good = require('good');//good and good-console are packages that provide important
var GoodConsole = require('good-console');//information regarding the operation of your server
//
module.exports = {
  register: Good,
  options: {
    reporters: [{
      reporter: GoodConsole,
      events: {log: '*', response: '*', error: '*', request: '*'}
    }]
  }
};
