'use strict';

angular.module('clientApp')
    .controller('RestaurantCtrl', function($scope, $location, $routeParams, Restaurant, AddressFormatter, Restaurateur) {
        if (!$routeParams.id) {
            //No id => Restaurant list
            $scope.restaurants = Restaurant.all();
        } else {
            if ($routeParams.id == 'new') {
                $scope.currentRestaurant = new Restaurant();
            } else {
                $scope.currentRestaurant = Restaurant.get({
                    id: $routeParams.id
                });
            }

            // $scope.currentRestaurant.restaurateur = _.pluck($scope.currentRestaurant.restaurateur, 'id');
            //get the list of the restaurants
            $scope.restaurateurs = Restaurateur.all();
        }

        $scope.address = AddressFormatter.address;
        $scope.saveRestaurant = function() {
            if ($scope.currentRestaurant.id) {
                $scope.currentRestaurant.$$update().then(function() {
                    $location.path('/restaurants');
                })
            } else {
                $scope.currentRestaurant.$save().then(function() {
                    $location.path('/restaurants');
                });
            }
        };
        $scope.defaultRestaurateur = function() {
            if ($scope.currentRestaurant.restaurateur_id) {
                return '-- Restaurateur: ' + $scope.currentRestaurant.restaurateur_name + ' --';
            }
            return '-- Choose a Restaurateur --';
        };
    });
