'use strict';

module.exports = {
  handler: function(request, reply) {
    reply({email:request.auth.credentials.email});
  }
};
