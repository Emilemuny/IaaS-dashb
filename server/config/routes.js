'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},

  {method: 'post', path: '/register', config: require('../routes/users/register')},
  {method: 'post', path: '/login', config: require('../routes/users/login')},
  {method: 'get', path: '/status', config: require('../routes/users/status')},
  {method: 'delete', path: '/logout', config: require('../routes/users/logout')},
  {method: 'get', path: '/cloud', config: require('../routes/cloudinfra/aws/AWS_compute_get')},
  {method: 'get', path: '/cloudcreate', config: require('../routes/cloudinfra/aws/AWS_compute_create')},
  {method: 'get', path: '/joyentcreate', config: require('../routes/cloudinfra/joyent/joyent_compute_create')},
  {method: 'get', path: '/joyentget', config: require('../routes/cloudinfra/joyent/joyent_compute_get')},
  {method: 'get', path: '/docreate', config: require('../routes/cloudinfra/digitalOcean/docean_compute_create')}
];
