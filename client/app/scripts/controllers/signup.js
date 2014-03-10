'use strict';

angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $location, AuthService) {
    $scope.user = {};
    $scope.location = 'signup';
    $scope.submitValue = 'Register';
    $scope.register = function(){
      AuthService._setUser({name: $scope.user.name, type: 'client', id: 2}).then(function(){
        $location.path('main');
      });
    };

    if(AuthService.isLoggedIn()) {
      $location.path('main');
    }

    $scope.requiredInputs = ['name', 'username', 'password', 'passwordConfirmation', 'address.address', 'address.city', 'address.province', 'address.postalCode', 'address.country'];
    $scope.disabledInputs = [];

    $scope.isRequired = function(input){
      return _.some($scope.requiredInputs, function(req){ return req === input; });
    };

    $scope.isDisabled = function(input){
      return _.some($scope.disabledInputs, function(dis){ return dis === input; });
    }
  });
