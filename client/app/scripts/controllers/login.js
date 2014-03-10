'use strict';

angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, AuthService, $location) {
    $scope.errors = [];

    $scope.authenticate = function() {
      $scope.errors = [];
      AuthService.authenticate({username: $scope.username, password: $scope.password}).then(function(error){
        if(error) {
          $scope.errors.push(error);
        } else {
          $location.path('main');
        }
      });
    };

    $scope.hasError = function(which) {
      return _.some($scope.errors, {which: which});
    };

    $scope.clearError = function(which) {
      $scope.errors = _.without($scope.errors, {which: which});
    };

    if(AuthService.isLoggedIn()) {
      $location.path('main');
    }

  });
