'use strict';

require('babel/register');

var Hapi = require('hapi');
var server = new Hapi.Server();
var plugins = require('./config/plugins');
var routes = require('./config/routes');
var authentication = require('./config/authentication');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);
server.connection({port:process.env.PORT});

mongoose.connection.once('open', function(){
  server.register(plugins, function(){
    server.auth.strategy('session', 'cookie', true, authentication);
    server.route(routes);
    server.start(function(){
      console.log('info', server.info.uri);
      console.log('info', process.env.MONGO_URL);
    });
  });
});

module.exports = server;
