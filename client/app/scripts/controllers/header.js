'use strict';

angular.module('clientApp')
  .controller('HeaderCtrl', function ($scope, $location, AuthService) {
    $scope.$watch(AuthService.isLoggedIn, function(loggedIn) {
      populateMenu();
    });

    var defaultMenuItems = [];
    $scope.menuItems = [];

    function populateMenu(){
      var user = AuthService.currentUser();
      switch(user.type) {
        default:
          $scope.menuItems = defaultMenuItems.concat([{
            location: '/login',
            name: 'Login'
          },{
            location: '/signup',
            name: 'Create New Account'
          }]);
      }
    }

    $scope.isActive = function(viewLocation){
      return viewLocation === $location.path();
    };

    populateMenu();
  });
