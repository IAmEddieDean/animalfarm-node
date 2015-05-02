'use strict';

var Fs = require('fs');//this is the recursive function that Chyld wrote for plugin management

var path = __dirname + '/../plugins';
var plugins = [];

function requireDirectory(dir){
  Fs.readdirSync(dir).forEach(function(file){
    var full = dir + '/' + file;

    if(Fs.statSync(full).isDirectory()){
      requireDirectory(full);
    }else{
      plugins.push(require(full));
    }
  });
}

requireDirectory(path);
module.exports = plugins;
