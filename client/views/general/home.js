'use strict';

angular.module('iaas-dashb')
.controller('HomeCtrl', ['$scope', '$rootScope', '$state', 'Cloud', function($scope, $rootScope, $state, Cloud){
  $scope.computecreate = function(image){
    Cloud.awscreate(image).then(function(response){
      console.log('Image type:', image);
      console.log('Response from AWS/backend', response);

      $rootScope.status = 0;
      $state.go('compute');
    });
  };


}]);
