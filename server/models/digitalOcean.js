/* jshint camelcase:false */

'use strict';

var pkgcloud = require('pkgcloud');

var client = pkgcloud.compute.createClient({
  provider : 'digitalocean',
  clientId: process.env.DigitalOcean_ClientId,
  apiKey: process.env.DigitalOcean_apiKey

});

module.exports = client;
