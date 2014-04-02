'use strict';

angular.module('clientApp')
  .controller('ClientOrderCtrl', function ($scope, $location, RestaurantMenu, Restaurant, CurrencyFormatter, Client, AuthService, AddressFormatter, growlNotifications, Commande) {
    $scope.selectedRestaurant;
    $scope.currentOrder = {};

    $scope.stepReady = [];
    $scope.stepReady[1] = true;

    // Fetch all menus, build restaurant list from there
    $scope.restaurants = Restaurant.all();

    // Fetch the current client for his addresses
    $scope.currentClient = Client.get({id: AuthService.currentUser().id});

    //When the addresses have loaded, set the default one as current
    $scope.currentClient.$promise.then(function(){
      $scope.currentAddress = _.find($scope.currentClient.addresses, {is_default: true});
    });

    var showLoading = function(){};
    var hideLoading = function(){};

    $scope.stepReady = function(step){
      if(step > 1) {
        if(!$scope.selectedRestaurant) {
          return false;
        }
      }
      if (step > 2) {
        if($scope.emptyOrder()) {
          return false
        }
      }
      if (step > 3) {
        if(_.isEmpty($scope.currentAddress)) {
          return false
        }
      }

      if (step > 4) {
        if(!$scope.deliveryDate) {
          return false
        }
      }
      return true;
    };

    $scope.confirmOrder = function(){
      if(!$scope.stepReady(5)) {
        return false;
      }
      var order = new Commande();
      order.repas = _.map($scope.currentOrder, function(quantity, id){
        return {repas_id: id, quantity: quantity};
      });
      order.restaurant = $scope.selectedRestaurant;
      order.client = AuthService.currentUser().id;
      order.scheduled_date = $scope.deliveryDate;
      order.address = $scope.currentAddress.id;
      order.$save().then(function(orderServ){
        growlNotifications.add('Your order has successfully been placed. Your order confirmation number is ' + orderServ.id, 'success');
        $location.path('/');
      });
    }

    $scope.showStep = function(step) {
      if(!$scope.stepReady(step)) return;
      $scope.currentStep = step || 1;
    };

    $scope.nextStep = function(condition){
      if(_.isUndefined(condition) || condition) {
        var currentStep = $scope.currentStep
        $scope.showStep(currentStep + 1);
      }
    };

    $scope.emptyOrder = function(){
      return _.isEmpty($scope.currentOrder);
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

    $scope.selectAddress = function(address){
      $scope.currentAddress = address;
    };

    $scope.incrementRepas = function(repas){
      if(_.isUndefined($scope.currentOrder[repas.id])) {
        $scope.currentOrder[repas.id] = 0;
      }
      $scope.currentOrder[repas.id] += 1;
    };

    $scope.decrementRepas = function(repas){
      if($scope.currentOrder[repas.id] && $scope.currentOrder[repas.id] > 0 ) {
        $scope.currentOrder[repas.id] -= 1;
        if($scope.currentOrder[repas.id] == 0) {
          delete $scope.currentOrder[repas.id];
        }
      }
    };

    $scope.getCurrentRepasCount = function(repas) {
      return $scope.currentOrder[repas.id] || 0;
    };

    var getRepasProp = $scope.getRepasProp = function(repasId, propName){
      repasId = _.parseInt(repasId);
      return _($scope.menus).pluck('repas').flatten().find({id: repasId})[propName];
    };

    $scope.getRepasName = function(repasId){
      return getRepasProp(repasId, 'nom');
    };

    $scope.getRepasDescription = function(repasId){
      return getRepasProp(repasId, 'description');
    };

    $scope.getRowSubtotalFloat = function(repasId, quantity){
      return CurrencyFormatter.filterFloat(getRepasProp(repasId, 'prix')) * quantity;
    };

    $scope.getRowSubtotal = function(repasId, quantity){
      return CurrencyFormatter.currency($scope.getRowSubtotalFloat(repasId, quantity));
    };

    $scope.getSubtotalFloat = function(order){
      return _.reduce($scope.currentOrder, function(subTotal, quantity, repasId){
        return subTotal + $scope.getRowSubtotalFloat(repasId, quantity);
      }, 0);
    };

    $scope.getSubtotal = function(order){
      return CurrencyFormatter.currency($scope.getSubtotalFloat(order));
    };

    $scope.getTaxesFloat = function(order){
      return CurrencyFormatter.taxes($scope.getSubtotalFloat(order));
    };

    $scope.getTaxes = function(order){
      return CurrencyFormatter.currency($scope.getTaxesFloat(order));
    };

    $scope.getTotal = function(order){
      return CurrencyFormatter.currency($scope.getTaxesFloat(order) + $scope.getSubtotalFloat(order));
    };

    $scope.currency = CurrencyFormatter.currency;
    $scope.address = AddressFormatter.address;
  });
