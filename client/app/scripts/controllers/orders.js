'use strict';

angular.module('clientApp')
  .controller('OrdersCtrl', function ($scope, Commande, RestaurateurCommande, AddressFormatter, CurrencyFormatter, DateFormatter) {
    $scope.restaurantOrders = RestaurateurCommande.all();

    var capitalize = $scope.capitalize = function(string){
      if(!string){
        return '';
      }
      return string[0].toUpperCase() + string.substring(1);
    };

    var statusClass = $scope.statusClass = function(status){
      switch(status){
        case 'ready':
          return 'success';
        case 'ordered':
          return 'warning';
        case 'cancelled':
          return 'danger';
        default:
          return 'default';
      }
    };

    $scope.currency = CurrencyFormatter.currency;
    $scope.address = AddressFormatter.address;
    $scope.date = DateFormatter.datetime;
    $scope.taxes = CurrencyFormatter.taxes;
    $scope.total = function(subtotal){
      return CurrencyFormatter.filterFloat(subtotal) * 1.15;
    };
    $scope.statusLabelClass = function(status){
      return 'label-' + statusClass(status);
    };
    $scope.selectOrder = function(order){
      $scope.currentOrder = order;
    };
    $scope.orderSelected = function(){
      return $scope.currentOrder && !_.isEmpty($scope.currentOrder);
    };
    $scope.subtotal = function(order){
      if(!order) return 0;
      return _.reduce(order.repas, function(sum, line){
        return sum + CurrencyFormatter.filterFloat(line.subtotal);
      }, 0);
    };
    $scope.finalTotal = function(order){
      var subtotal = $scope.subtotal(order);
      return subtotal + $scope.taxes(subtotal);
    };
    $scope.startPrep = function(order){
      Commande.$update({id: order.id, status: 'preparing'}).$promise.then(function(){
        _.find($scope.restaurantOrders, function(resto){
          return _.find(resto.commandes, {id: order.id});
        }).$get();
      });
      $scope.currentOrder = null;
    };
    $scope.finishPrep = function(order){
      Commande.$update({id: order.id, status: 'ready'}).$promise.then(function(){
        _.find($scope.restaurantOrders, function(resto){
          return _.find(resto.commandes, {id: order.id});
        }).$get();
      });
      $scope.currentOrder = null;
    };
  });
