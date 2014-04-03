'use strict';

angular.module('clientApp')
  .controller('DeliveryCtrl', function ($scope, Livraison, CurrencyFormatter, DateFormatter, AddressFormatter) {
    $scope.livraisons = Livraison.all();

    var capitalize = $scope.capitalize = function(string){
      if(!string){
        return '';
      }
      return string[0].toUpperCase() + string.substring(1);
    };

    var statusClass = $scope.statusClass = function(status){
      switch(status){
        case 'complete':
          return 'success';
        case 'ready':
          return 'warning';
        case 'delivering':
          return 'danger';
        default:
          return 'default';
      }
    };
    $scope.statusLabelClass = function(status){
      return 'label-' + statusClass(status);
    };
    $scope.deliverySelected = function(){
      return $scope.selectedDelivery && !_.isEmpty($scope.selectedDelivery);
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

    $scope.currency = CurrencyFormatter.currency;
    $scope.address = AddressFormatter.address;
    $scope.date = DateFormatter.datetime;
    $scope.taxes = CurrencyFormatter.taxes;
    $scope.total = function(subtotal){
      return CurrencyFormatter.filterFloat(subtotal) * 1.15;
    };
    $scope.selectDelivery = function(liv){
      $scope.selectedDelivery = liv;
    };

    $scope.startDelivery = function(liv){
      liv.$$update({status: 'delivering'});
    };

    $scope.finishDelivery = function(liv){
      liv.$$update({status: 'complete'});
    };
  });
