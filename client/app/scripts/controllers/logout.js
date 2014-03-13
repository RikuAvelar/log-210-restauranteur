'use strict';

angular.module('clientApp')
  .controller('LogoutCtrl', function ($scope, $location, AuthService) {
    AuthService.logout().then(function(){
      console.log('logout');
      $location.path('login');
    });
  });
