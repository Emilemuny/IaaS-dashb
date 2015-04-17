'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},

  {method: 'post', path: '/register', config: require('../routes/users/register')},
  {method: 'post', path: '/login', config: require('../routes/users/login')},
  {method: 'get', path: '/status', config: require('../routes/users/status')},
  {method: 'delete', path: '/logout', config: require('../routes/users/logout')},

  {method: 'get', path: '/awsget', config: require('../routes/cloudinfra/aws/AWS_compute_get')},
  {method: 'post', path: '/awscreate/{image}', config: require('../routes/cloudinfra/aws/AWS_compute_create')},
  {method: 'get', path: '/awsreboot', config: require('../routes/cloudinfra/aws/AWS_compute_reboot')},
  {method: 'get', path: '/awsdestroy', config: require('../routes/cloudinfra/aws/AWS_compute_destroy')},

  {method: 'get', path: '/joyentcreate', config: require('../routes/cloudinfra/joyent/joyent_compute_create')},
  {method: 'get', path: '/joyentget', config: require('../routes/cloudinfra/joyent/joyent_compute_get')},

  {method: 'get', path: '/docreate', config: require('../routes/cloudinfra/digitalOcean/docean_compute_create')},
  {method: 'get', path: '/doget', config: require('../routes/cloudinfra/digitalOcean/docean_compute_get')},

  {method: 'get', path: '/oscreate', config: require('../routes/cloudinfra/openstack/os_compute_create')}
];
