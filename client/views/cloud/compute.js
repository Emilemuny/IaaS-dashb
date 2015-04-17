'use strict';

angular.module('iaas-dashb')
 .controller('computeCtrl', ['$scope', '$rootScope', 'Cloud', function($scope, $rootScope, Cloud){
   $rootScope.status = 1;
 }]);
