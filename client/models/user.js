'use strict';

angular.module('angular-prototype')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function status(){
      return $http.get('/status');
    }

    function logout(){
      return $http.delete('/logout');
    }

    return {register:register, login:login, status:status, logout:logout};
  }]);
