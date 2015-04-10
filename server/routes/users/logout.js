'use strict';

module.exports = {
  handler: function(request, reply) {
    request.auth.session.clear();
    reply();
  }
};
