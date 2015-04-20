'use strict';

angular.module('iaas-dashb')
  .controller('ProvisioningCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
    setTimeout(function(){
      $state.go('compute');
    }, 15000);
  }]);
