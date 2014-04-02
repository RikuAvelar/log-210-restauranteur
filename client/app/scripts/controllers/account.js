'use strict';

angular.module('clientApp')
  .controller('AccountCtrl', 
    function ($scope, Client, $routeParams, $location, AddressFormatter, AuthService) 
    {
    $scope.address = AddressFormatter.userAddress;
    $scope.currentClient = Client.get({id: AuthService.currentUser().id});
     
    $scope.saveChanges = function(){
    	console.log($scope.currentClient);
      $scope.currentClient.$$update();
    }


  });
