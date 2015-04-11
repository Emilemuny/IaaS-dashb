/* jshint camelcase:false */
'use strict';

var pkgcloud = require('pkgcloud');

var client = pkgcloud.compute.createClient({
  provider: 'amazon',
  key: process.env.AWS_Secretkey,
  keyId: process.env.AWS_keyId,
  region: 'us-west-2'

});

module.exports = client;
