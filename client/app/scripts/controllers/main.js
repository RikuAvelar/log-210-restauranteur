'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $location, AuthService) {
    $scope.loading = true;
    console.log('MainCtrl call');

    function renderPage() {
      $scope.loading = false;
      if(!AuthService.isAuthenticated()) {
        $location.path('login');
      } else {
        $scope.UserInfo = AuthService.currentUser();
      }
    }

    $scope.tagLine = function(){
      if(AuthService.isAuthenticated()) {
        switch($scope.UserInfo.type) {
          case 'client':
            return 'Delicious meals at your fingertips.';
          case 'livreur':
            return 'Someone\'s got the need for feed';
          case 'restaurateur':
            return 'The entire world at your fingertips';
          case 'entrepreneur':
            return 'JOHN CONNOR HAS NOT YET BEEN LOCATED';
        }
      } else {
        return 'Why, hello there. You aren\'t supposed to be here, yet you have made your way one way or another. Please wait while monkeys bring back your signal';
      }
    };

    renderPage();
  });
