'use strict';

var client = require('../../models/aws');

module.exports = {
  auth: false,
  handler: function(request, reply){
    var options = {
      image: 'ami-ff527ecf',
      Maxcount: '1',
      Mincount: '1'
    };
    client.createServer(options, function(err, server){
      if(err){
        console.log('Error****', err);
      }

      console.log('Server created info', server.toJSON());
    });
    reply('Success');
  }
};

// client.getImages(function (err, images) {
//   if (err) {
//     console.log('There has been an error',err);
//     return;
//   }
//   ´.log('Images******', images);
//   var image = _.findWhere(images, { name: 'Amazon Linux AMI 2015.03' });
//   console.log('ImageFound***', image);
//
// });
