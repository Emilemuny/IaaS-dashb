'use strict';

var pkgcloud = require('pkgcloud');

var client = pkgcloud.compute.createClient({
  provider : 'joyent',
  username: process.env.JoyentUsername,
  password: process.env.JoyentPWD
});

module.exports = client;
