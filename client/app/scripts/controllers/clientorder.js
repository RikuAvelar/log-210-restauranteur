'use strict';

angular.module('clientApp')
  .controller('ClientOrderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.stepReady = [];
    $scope.stepReady[2] = true;

    $scope.showStep = function(step) {
      $scope.currentStep = step || 1;
      $scope.stepReady[step + 1] = true;
    }
  });
