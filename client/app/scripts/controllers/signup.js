'use strict';

angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $location, AuthService) {
    $scope.user = {};
    $scope.location = 'signup';
    $scope.submitValue = 'Register';
    $scope.register = function(){
      AuthService._setUser(_.extend({name: $scope.user.name, type: 'client', id: 2}, $scope.user)).then(function(){
        $location.path('main');
      });
    };
  });
