'use strict';

angular.module('clientApp')
  .controller('RestaurateursCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.params = $routeParams;
    //$scope.reverseAnimation = true;
  });
