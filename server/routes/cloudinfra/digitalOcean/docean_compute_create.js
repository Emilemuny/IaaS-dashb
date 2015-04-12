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

    client.getImages(function(err, images){
      if(err){ console.log('Error', err); }
      images.forEach(function(image){
        console.log('Image', image);
      });
    });

    // var options = {
    //   name: 'TestServer',
    //   flavor: '64',
    //   image: '64',
    //   region: 'nyc2'
    // };
    // client.createServer(options, function(err, server){
    //   if(err){
    //     console.log('There was an error', err);
    //   }
    //   console.log('Server created', server.toJSON());
    // });

    reply('Success');
  }

};
