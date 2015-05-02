'use strict';//see create.js for explanations for most things

var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/dogs/{dogId}',
    config: {
      description: 'delete one dog',
      handler: function(request, reply){
        Dog.findByIdAndRemove(request.params.dogId, function(err, dog){
          return reply(dog);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.destroy'
};
