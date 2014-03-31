'use strict';

angular.module('clientApp')
  .controller('MenuCtrl', function ($scope, Menu, $routeParams, $location) {
    $scope.currentMenu = {};
    $scope.currentRepas = {};

    if(!$routeParams.id) {
      Menu.getOwn({}, function(menus){
        $scope.menus = _.groupBy(menus, 'restaurant_id');
      });
    } else {
      if ($routeParams.id !== 'new') {
        $scope.currentMenu = Menu.get({id: $routeParams.id});
      } else {
        $scope.currentMenu = new Menu();
        $scope.currentMenu.repas = [{isPlaceholder: true, nom: 'Please add a meal'}];
        $scope.currentMenu.restaurant_id = $routeParams.restaurant;
      }
    }

    var filterFloat = function (value) {
        if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
          .test(value))
          return Number(value);
      return NaN;
    };

    var addRepas = function(nouveauRepas){
      var repas = _.clone(nouveauRepas);
      $scope.currentMenu.repas = $scope.currentMenu.repas || [];
      $scope.currentMenu.repas.push(repas);
    };

    var modifyRepas = function(existing, nouveauRepas){
      _.extend(existing, nouveauRepas);
    };

    var cleanRepasArray = function(){
      // Remove placeholders
      _.remove($scope.currentMenu.repas, function(r){ return r.isPlaceholder});
    };

    $scope.addOrModifyRepas = function(repas){
      cleanRepasArray();
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
      if(repas.isPlaceholder){
        return;
      }
      $scope.currentRepas = _.clone(repas);
      $scope.currentRepas.prix = filterFloat(repas.prix);
    };

    $scope.confirmMenu = function(){
      var promise;
      console.log($scope.currentMenu)
      if($scope.currentMenu.id) {
        promise = $scope.currentMenu.$$update();
      } else {
        promise = $scope.currentMenu.$save();
      }
      promise.then($location.path('/menus'));
    };

    $scope.modifyingMenu = function(){
      return !_.isUndefined($routeParams.id);
    };

    $scope.currentMenuRepas = function(){
      if( _.isEmpty($scope.currentMenu.repas) ) {
        return [{isPlaceholder: true, nom: 'Please add a meal to the menu'}];
      }
      return $scope.currentMenu.repas;
    };

  });
