'use strict';

var client = require('../../../models/joyent');


module.exports = {
  auth: false,
  handler: function(request, reply){
    var options = {
      package : 'g3-highcpu-1.75-smartos'

    };
    client.createServer(options, function(err, server){
      if(err){
        console.log('There is an error', err);
      }
      console.log('Your newly created server info', server.toJSON());
    });
    reply('Success');
  }
};
