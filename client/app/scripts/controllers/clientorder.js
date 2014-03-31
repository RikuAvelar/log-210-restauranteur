'use strict';

angular.module('clientApp')
  .controller('ClientOrderCtrl', function ($scope, RestaurantMenu, Restaurant, CurrencyFormatter) {
    $scope.selectedRestaurant;
    $scope.currentOrder = {};

    $scope.stepReady = [];
    $scope.stepReady[1] = true;

    // Fetch all menus, build restaurant list from there
    $scope.restaurants = Restaurant.all();

    var showLoading = function(){};
    var hideLoading = function(){};

    $scope.showStep = function(step) {
      if(!$scope.stepReady[step]) return;
      $scope.currentStep = step || 1;
    };

    $scope.nextStep = function(){
      var currentStep = $scope.currentStep
      $scope.stepReady[currentStep + 1] = true;
      $scope.showStep(currentStep + 1);
    };

    $scope.selectRestaurant = function(restaurantId){
      $scope.selectedRestaurant = restaurantId;
      $scope.currentOrder = {};
      showLoading();
      $scope.menus = RestaurantMenu.allFor({restaurant_id: restaurantId});
      $scope.menus.$promise.then(function(){
        hideLoading();
        $scope.nextStep();
      });
    };

    $scope.currency = CurrencyFormatter.currency;
  });
