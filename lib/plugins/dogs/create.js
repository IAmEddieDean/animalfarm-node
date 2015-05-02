'use strict';
//this file is one plugin, consisting of a routing manager, a handler/controller,
//and the export declaration, which allows this to be used in the rest of the app


var Dog = require('../../models/dog');//this declares the required dependencies for this plugin.
//in the case of this app, where there is only 1 model, it will always be dog.js


exports.register = function(server, options, next){
  //The server object is a reference to the server your plugin is being loaded in
  //The options parameter is simply whatever options the user passes to your plugin
  //next is a method to be called when your plugin has completed whatever steps are necessary for it to be registered
  
  
  server.route({//this section is the routing manager. It consists of a verb (GET, POST, PUT, or DELETE)
    method: 'POST',//and a path/url. this path is the actual url entered in the browser
    path: '/dogs',
    
    
    config: {//these are the configuration attributes associated with this plugin. it includes the description
      //as well as the handler/controller function
      description: 'creates a dog',//the description, though not required, is best practice for identifying
      //what exactly the plugin does, and is visible in the bash window when using Good
      
      handler: function(request, reply){//this is the handler/controller section of the plugin. The function
        var dog = new Dog(request.payload);//within is what does the heavy lifting of resources between the
        //database and the client browser
        dog.save(function(){
          if(dog.errors){//the Dog object is created in the dog.js model
            return reply(dog.errors).code(400);
          }else{
          return reply(dog);
          }
        });
      }
    }
  });
  return next();//This method accepts only one parameter, err,
};//that should only be defined if an error occurred while registering your plugin

exports.register.attributes = {//The register function has an attributes object
  name: 'dogs.create'//attached to it to provide hapi with some additional information
};//about the plugin, such as name and version
