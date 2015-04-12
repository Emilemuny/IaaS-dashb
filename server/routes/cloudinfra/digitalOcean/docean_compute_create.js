'use strict';

var client = require('../../../models/digitalOcean');

module.exports = {
  auth: false,
  handler: function(request, reply){

    client.getFlavors(function(err, flavors){
      if(err){ console.log('Error', err);}
      flavors.forEach(function(flavor){
        console.log('Flavor', flavor);
      });
    });

    var options = {
      name: 'TestServer',
      flavor: '2233',
      image: '6370882',
      region: 'nyc2'
    };
    client.createServer(options, function(err, server){
      if(err){
        console.log('There was an error', err);
      }
      console.log('Server created', server.toJSON());
    });

    reply('Success');
  }

};
