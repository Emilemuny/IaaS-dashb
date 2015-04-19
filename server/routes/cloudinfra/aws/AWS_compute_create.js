'use strict';

var client = require('../../../models/aws');
module.exports = {
  auth: false,
  handler: function(request, reply){
    console.log('HERE HERE');
    debugger;
    console.log('Request coming in ****', request.params.image);
    var options = {
      image: request.params.image,
      Maxcount: '1',
      Mincount: '1'
    };
    client.createServer(options, function(err, server){
      if(err){
        console.log('Error****', err);
      }
      console.log('Server created info', server.toJSON());
      reply(server.toJSON());
    });

  }
};
