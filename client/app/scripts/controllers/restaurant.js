'use strict';

angular.module('clientApp')
  .controller('RestaurantCtrl', function ($scope, $routeParams, Restaurant, AddressFormatter, Restaurateur) {
    if (!$routeParams.id) {
      //No id => Restaurant list
      $scope.restaurants = Restaurant.all();
    } else {
      if($routeParams.id == 'new') {
        $scope.currentRestaurant = new Restaurant();
      } else {
        $scope.currentRestaurant = Restaurant.get({id: $routeParams.id});
      }
	  
	    $scope.currentRestaurant.restaurateur = _.pluck($scope.currentRestaurant.restaurateur, 'id');
	  //get the list of the restaurants
	  $scope.restaurateurs = Restaurateur.all();
    }

    $scope.address = AddressFormatter.address;
  });
