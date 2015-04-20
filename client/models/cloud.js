'use strict';

angular.module('iaas-dashb')
.factory('Cloud', ['$http', function($http){
  function awscreate(image){
    return $http.post(`/awscreate/${image}`);
  }

  function awsget(serverId){
    return $http.get(`/awsget/${serverId}`);
  }

  return {awscreate:awscreate, awsget:awsget};
}]);
