'use strict';

var client = require('../../../models/openstack');

module.exports = {
  auth: false,
  handler: function(request, reply){
    var options = {
      name: 'TestServer',
      image: '',
      flavor: '',
    };
    client.createServer(options, function(err, server){
       if(err){ console.log('There was an error', err);}
       console.log('Server created', server);
    });
    reply('Success');
  }
};
