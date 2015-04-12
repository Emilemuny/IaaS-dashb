'use strict';

var client = require('../../../models/digitalOcean');


module.exports = {
  auth: false,

  handler: function(request, reply){
    client.getServers(function(err, servers){
      if(err){
        console.log('There was an error', err);
        reply().code(400);
      }

      if(servers.length === 0) {
        console.log('You got no servers at Digital Ocean', servers);
      }
      servers.forEach(function(server){
        console.log('Server at DO****', server.toJSON());
      });
    });
    reply('Success').code(200);
  }

};
