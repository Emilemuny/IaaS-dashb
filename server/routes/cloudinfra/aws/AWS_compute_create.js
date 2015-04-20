'use strict';

var client = require('../../../models/aws');
var User = require('../../../models/user');
module.exports = {
  handler: function(request, reply){

    console.log('userId', request.auth.credentials._id);

    var options = {
      image: request.params.image,
      name : request.auth.credentials.email,
      Maxcount: '1',
      Mincount: '1'
    };
    client.createServer(options, function(err, server){
      if(err){
        console.log('Error****', err);
        return reply().code(400);
      }
      console.log('Server created info', server.toJSON());
      console.log(server.toJSON().id);
      User.findById(request.auth.credentials._id, function(err, user){
        user.cloud.server.id = server.toJSON().id;
        user.cloud.server.name = server.toJSON().name;
        user.cloud.server.addresses = server.toJSON().addresses;
        user.save();
      });
      reply(server.toJSON()).code(200);
    });
  }
};
