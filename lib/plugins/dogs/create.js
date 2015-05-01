'use strict';

var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/dogs',
    config: {
      description: 'creates a dog',
      handler: function(request, reply){
        var dog = new Dog(request.payload);
        dog.save(function(){
          if(dog.errors){
            return reply(dog.errors).code(400);
          }else{
          return reply(dog);
          }
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.create'
};
