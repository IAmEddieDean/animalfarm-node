'use strict';

var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/dogs',
    config: {
      description: 'get all dogs',
      handler: function(request, reply){
        Dog.find(function(err, dogs){
          return reply({dogs: dogs});
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.index'
};
