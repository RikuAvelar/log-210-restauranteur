'use strict';

angular.module('clientApp')
  .controller('MenuCtrl', function ($scope, Menu) {
    Menu.getOwn({}, function(menus){
      $scope.menus = _.groupBy(menus, 'restaurant');
    });
  });
