'use strict';

angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, Client, $location, AuthService) {
  var client = $scope.currentClient = new Client();
  $scope.currentAddress = {}
  

  $scope.register = function() {
    client.user.addresses = [$scope.currentAddress];
    client.$save().then(function(){
      $location.path("/login");
      });


  }

  });

