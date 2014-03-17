'use strict';

angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/delivery', {
        templateUrl: 'views/delivery.html',
        controller: 'DeliveryCtrl'
      })
      .when('/restaurateurs', {
        templateUrl: 'views/restaurateursList.html',
        controller: 'RestaurateursCtrl'
      })
      .when('/restaurateurs/:id', {
        templateUrl: 'views/restaurateur.html',
        controller: 'RestaurateursCtrl'
      })
      .when('/restaurants', {
        templateUrl: 'views/restaurantList.html',
        controller: 'RestaurantCtrl'
      })
      .when('/restaurants/:id', {
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/orderUp', {
        templateUrl: 'views/clientorder.html',
        controller: 'ClientOrderCtrl'
      })
      .when('/orders/:id?', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl'
      })
      .otherwise({
        templateUrl: 'views/404.html'
      });
  })
  .run(function($rootScope, AuthService, $route, $location, $q){
    var authFetch = AuthService.getAuthData();
    $rootScope.$on('$routeChangeStart', function(event, next, current){
      $q.when(authFetch).then(function(){
        if(AuthService.isAuthenticated()){
          if(AuthService.isAuthRoute(next.originalPath)){
            $route.reload();
            $location.path('/');
          }
        } else {
          if(!AuthService.isAuthRoute(next.originalPath)){
            $route.reload();
            $location.path('/login');
          }
        }
      });
    });
  });
