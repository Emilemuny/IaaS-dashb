'use strict';

angular.module('iaas-dashb')
 .controller('ComputeCtrl', ['$scope', '$rootScope', 'Cloud', '$state', function($scope, $rootScope, Cloud, $state){
    $scope.init = function(serverId){
      console.log('serverId');
    };


 }]);
