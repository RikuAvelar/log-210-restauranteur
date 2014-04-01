'use strict';

angular.module('clientApp').controller('RestaurateursCtrl', function ($scope, $routeParams, Restaurateur, AddressFormatter, Restaurant) {
  
    if (!$routeParams.id) {
      //No id => Restaurateur list
      $scope.restaurateurs = Restaurateur.all();
    } else {
      if($routeParams.id == 'new') {
        $scope.currentRestaurateur = new Restaurateur();
      } else {
        $scope.currentRestaurateur = Restaurateur.get({id: $routeParams.id});
      }
	  
	  $scope.currentRestaurateur.restaurants = _.pluck($scope.currentRestaurateur.restaurants, 'id');
	  //get the list of the restaurants
	  $scope.restaurants = Restaurant.all();
	  
	  
    }

	$scope.confirmRestaurateur = function()
	{
		var save = $scope.currentRestaurateur.id ? '$$update' : '$save';
		
		$scope.currentRestaurateur[save](); //runs $$update or $save
	}
	
	
	$scope.restoIsSelected = function(resto)
	{
		return _.indexOf($scope.currentRestaurateur.restaurants, resto.id) !== -1;
	}
	
    $scope.address = AddressFormatter.address;
    $scope.restaurantList = function(restaurateur) {
      var restaurants = restaurateur.restaurants;

      if(_.isEmpty(restaurants)) {
        restaurants = [{name: '( No restaurants assigned )'}];
      }
      return _.pluck(restaurants, 'name').join(', ');
    }
  });
