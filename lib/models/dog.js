'use strict';

var Mongoose = require('mongoose');

var dogSchema = Mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  sex: {type: String, required: true},
  photo: {type: String}
});

var Dog = Mongoose.model('Dog', dogSchema);

module.exports = Dog;
