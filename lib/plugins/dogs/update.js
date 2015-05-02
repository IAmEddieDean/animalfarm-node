'use strict';

var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/dogs/{dogId}/edit',
    config: {
      description: 'update one dog',
      handler: function(request, reply){
            //findByIdAndUpdate is a Mongoose built in function, there are many like it, but this one is mine.
        Dog.findByIdAndUpdate(request.params.dogId, request.payload, function(err, dog){
          return reply(dog);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.update'
};
