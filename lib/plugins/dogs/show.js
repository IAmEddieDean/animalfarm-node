'use strict';

var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/dogs/{dogId}',
    config: {
      description: 'get one dog',
      handler: function(request, reply){
        Dog.findById(request.params.dogId, function(err, dog){
          return reply(dog);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.show'
};
