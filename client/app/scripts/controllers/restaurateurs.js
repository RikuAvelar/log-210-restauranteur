'use strict';

angular.module('clientApp')
  .controller('RestaurateursCtrl', function ($scope, $routeParams, Restaurateur, AddressFormatter) {
    if (!$routeParams.id) {
      //No id => Restaurateur list
      $scope.restaurateurs = Restaurateur.all();
    } else {
      if($routeParams.id == 'new') {
        $scope.currentRestaurateur = new Restaurateur();
      } else {
        $scope.currentRestaurateur = Restaurateur.get({id: $routeParams.id});
      }
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
