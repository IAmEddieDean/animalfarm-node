'use strict';

var Hapi = require('hapi');//these are the plugins used by this particular app
var Mongoose = require('mongoose');//Node packages are named simply
var Blipp = require('Blipp');
var Plugins = require('./tools/plunge');//while plugins created within the app must be assigned a Path to access them

exports.init = function(port, cb){
  var server = new Hapi.Server({connections:{routes:{cors:true}}});//this is what instantiates the server locally
  //on your machine. the argument taken establishes permission for cross-port communication.
  
  server.connection({port: port});//this port is declared within the bash window when starting the server
  
  Mongoose.connect(process.env.MONGO_URL);//MONGO_URL is similarly declared within the bash window
  //with this command:     PORT=8000 MONGO_URL=mongodb://localhost/*homepage/app-name* nodemon index.js
  //the command above is what allows your local Mongo DB to connect to a port and transmit information


  Mongoose.connection.once('open', function(){//this part of the function registers your plugins with the server
    Plugins.push(Blipp);//through Mongoose. The var Plugins is populated by a recursive function that Chyld was
    server.register(Plugins, function(err){//kind enough to write and add to Aphrodite package. This function
      if(err){return cb(err);}//iterates over the list of plugins from the /plugins directory.

      server.start(function(err){
        return cb(err, server);
      });
    });
  });
};
