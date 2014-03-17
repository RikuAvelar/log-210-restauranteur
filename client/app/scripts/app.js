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
      .when('/restaurateurs/:id', {
        templateUrl: 'views/restaurateurs.html',
        controller: 'RestaurateursCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/orderUp', {
        templateUrl: 'views/clientorder.html',
        controller: 'ClientOrderCtrl'
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
