'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: false,
  validate: {
    payload: {
      email: Joi.string().email(),
      password: Joi.string().required()
    }
  },
  handler: function(request, reply){
    User.register(request.payload, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
