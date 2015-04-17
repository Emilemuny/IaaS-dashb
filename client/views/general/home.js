'use strict';

angular.module('iaas-dashb')
.controller('HomeCtrl', ['$scope', 'Cloud', function($scope, Cloud){
  $scope.computecreate = function(image){
    Cloud.awscreate(image).then(function(response){
      console.log('Image type:', image);
      console.log('Response from AWS/backend', response);
    });
  };
}]);
