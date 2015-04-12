'use strict';

var client = require('../../../models/aws');

module.exports = {
  auth: false,
  handler: function(request, reply){

    var serverId = 'i-8bb4527c';
    client.destroyServer(serverId, function(err, server){
      if(err){ console.log('There was an error', err);}

      console.log('Confirmation info', server);
    });

    reply('Success');
  }
};
