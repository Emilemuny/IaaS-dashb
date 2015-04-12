'use strict';

var client = require('../../../models/joyent');


module.exports = {
  auth: false,
  handler: function(request, reply){
    client.getServers(function(err, servers){
      if(err){
        console.log('There was an error', err);
      }
      else if(servers.length === 0){
        console.log('You got no Servers at Joyent');
        console.log('Empty', servers);
      }
      servers.forEach(function(server){
        console.log('Your servers', server.toJSON());
      });
    });
    reply('Success');
  }
};
