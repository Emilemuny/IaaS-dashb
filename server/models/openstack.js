'use strict';

var pkgcloud = require('pkgcloud');

var client = pkgcloud.compute.createClient({
  provider: 'openstack',
  username: process.env.OpenstackUsername,
  password: process.env.OpenstackPWD,
  region: 'RegionOne',
  OS_AUTH_URL: 'http://identity.api.openstack.org/v2.0'
});

module.exports = client;
