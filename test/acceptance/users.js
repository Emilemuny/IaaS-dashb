/* jshint expr:true */

'use strict';

var expect = require('chai').expect;
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var server = require('../../server/index');
var cp = require('child_process');
var dbname = process.env.MONGO_URL.split('/')[3];
var cookie;

describe('Users Controller', function() {
  beforeEach(function(done) {
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [dbname], {cwd:__dirname + '/../scripts'}, function(){
      var options = {method:'post', url:'/login', payload:{email:'bob@aol.com', password:'123'}};
      server.inject(options, function(response){
        cookie = response.headers['set-cookie'][0].match(/hapi-cookie=[^;]+/)[0];
        done();
      });
    });
  });

  describe('post /register', function() {
    it('should create a new user', function(done) {
      var options = {
        method:'post',
        url:'/register',
        payload:{
          email:'fay@aol.com',
          password:'123'
        }
      };
      server.inject(options, function(response) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('post /login', function() {
    it('should authenticate a user', function(done) {
      var options = {
        method:'post',
        url:'/login',
        payload:{
          email:'bob@aol.com',
          password:'123'
        }
      };
      server.inject(options, function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.result.email).to.equal('bob@aol.com');
        done();
      });
    });
  });

  describe('get /status', function() {
    it('should determine if user is logged in', function(done) {
      var options = {
        method:'get',
        url:'/status',
        headers: {
          cookie: cookie
        }
      };
      server.inject(options, function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.result.email).to.equal('bob@aol.com');
        done();
      });
    });
  });
});
