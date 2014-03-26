'use strict';

angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, AuthService, $location) {
    $scope.errors = [];

    $scope.authenticate = function() {
      $scope.errors = [];
      AuthService.authenticate($scope.login).then(function(){
        $location.path('main');
      }, function(){
        $scope.errors.push({which: 'email'});
        $scope.errors.push({which: 'password'});
      });
    };

    $scope.hasError = function(which) {
      return _.some($scope.errors, {which: which});
    };

    $scope.clearError = function(which) {
      $scope.errors = _.without($scope.errors, {which: which});
    };
  });
