'use strict';

angular.module('clientApp')
  .controller('MenuCtrl', function ($scope, Menu, $routeParams, $location) {
    $scope.currentMenu = {};
    $scope.currentRepas = {};

    if(!$routeParams.id) {
      Menu.getOwn({}, function(menus){
        $scope.menus = _.groupBy(menus, 'restaurant');
      });
    } else {
      Menu.get({id: $routeParams.id}, function(menu){
        $scope.currentMenu = menu;
      });
    }

    var filterFloat = function (value) {
        if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
          .test(value))
          return Number(value);
      return NaN;
    }

    var addRepas = function(nouveauRepas){
      var repas = _.clone(nouveauRepas);
      $scope.currentMenu.repas = $scope.currentMenu.repas || [];
      $scope.currentMenu.repas.push(repas);
    };

    var modifyRepas = function(existing, nouveauRepas){
      _.extend(existing, nouveauRepas);
    };

    $scope.addOrModifyRepas = function(repas){
      var existingEntry = _.findWhere($scope.currentMenu.repas, {nom: repas.nom});
      if(existingEntry) {
        modifyRepas(existingEntry, repas);
      } else {
        addRepas(repas);
      }
    };

    $scope.emptyMenu = function(){
      return !$scope.currentMenu.repas || ($scope.currentMenu.repas && !$scope.currentMenu.repas.length)
    };

    $scope.setCurrentRepas = function(repas){
      $scope.currentRepas = _.clone(repas);
      $scope.currentRepas.prix = filterFloat(repas.prix);
    };

    $scope.confirmMenu = function(){
      $scope.currentMenu.$save().$promise.then(function(){
        $location.path('/menus')
      });
    };

  });
