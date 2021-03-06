'use strict';

var client = require('../../../models/aws');

module.exports = {
  auth: false,
  handler: function(request, reply){
    var serverId = request.params.serverId;
    client.getServer(serverId, function(err, server){
      if(err){
        console.log('There was an error', err);
      }
        console.log(server.toJSON());
        reply(server.toJSON());
      });
  }
};
