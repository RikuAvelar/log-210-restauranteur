'use strict';

angular.module('clientApp')
  .controller('RestaurantCtrl', function ($scope, $routeParams, Restaurant, AddressFormatter) {
    if (!$routeParams.id) {
      //No id => Restaurant list
      $scope.restaurants = Restaurant.all();
    } else {
      if($routeParams.id == 'new') {
        $scope.currentRestaurant = new Restaurant();
      } else {
        $scope.currentRestaurant = Restaurant.get({id: $routeParams.id});
      }
    }

    $scope.address = AddressFormatter.address;
  });
