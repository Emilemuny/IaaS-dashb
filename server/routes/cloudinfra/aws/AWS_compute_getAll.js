'use strict';

var client = require('../../../models/aws');

module.exports = {
  auth: false,
  handler: function(request, reply){
    client.getServers(function(err, servers){
      if(err){
        console.log('There was an error', err);
      }
      servers.forEach(function(server){
        console.log(server.toJSON());
      });
    });
    reply('Success');
  }
};
