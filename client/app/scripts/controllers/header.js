'use strict';

angular.module('clientApp')
  .controller('HeaderCtrl', function ($scope, $location, AuthService) {
    $scope.$watch(AuthService.currentUser, function(loggedIn) {
      populateMenu(loggedIn);
    });

    function performLogout(){
      AuthService.logout().then(function(){
        $location.path('login');
      });
    }

    var defaultMenuItems = [{
      callback: performLogout,
      name: 'Logout'
    }];
    $scope.menuItems = [];

    function populateMenu(){
      var user = AuthService.currentUser();
      switch(user.type) {
        case 'client':
          $scope.menuItems = [{
            location: '/order',
            name: 'Place Order'
          }, {
            location: '/account',
            name: 'Account Control'
          }].concat(defaultMenuItems);
          break;
        case 'livreur':
          $scope.menuItems = [{
            location: '/delivery',
            name: 'Prendre Livraison'
          }].concat(defaultMenuItems);
          break;
        case 'entrepreneur':
          $scope.menuItems = [{
            location: '/restaurateurs',
            name: 'Gérer Restaurateur'
          }].concat(defaultMenuItems);
          break;
        default:
          $scope.menuItems = [{
            location: '/login',
            name: 'Login'
          }, {
            location : '/signup',
            name: 'Create New Account'
          }];
      }
    }

    $scope.isActive = function(viewLocation){
      return viewLocation === $location.path();
    };

    $scope.itemLocation = function(item) {
      return item.location ? '#' + item.location : '';
    };

    populateMenu();
  });
