'use strict';

angular.module('iaas-dashb')
.factory('Cloud', ['$http', function($http){
  function awscreate(image){
    console.log('ImageTypeMODEL***', image);
    return $http.post(`/awscreate/${image}`);
  }
  return {awscreate:awscreate};
}]);
