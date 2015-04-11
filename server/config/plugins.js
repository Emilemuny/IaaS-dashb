'use strict';

module.exports = [
  {
    register: require('good'),
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: {
            request: '*',
            log: '*',
            response: '*',
            error: '*'
        },
        // args: [{log: '*', response: '*', error: '*'}]
      }]
    }
  },
  {
    register: require('hapi-auth-cookie')
  }
];
