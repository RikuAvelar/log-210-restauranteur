'use strict';

angular.module('clientApp')
  .factory('AuthService', function ($q, $location, $window) {
    // Current fake things using localStorage

    var currentUser = {};
    var fetchedAuthData = false;
    var authRoutes = ['/login', '/signup'];

    var dbo = {
      get: function(){
        var deferred = $q.defer();
        console.log('Called GET');
        deferred.resolve(JSON.parse(localStorage.getItem('mock-userdata') || '{}'));
        return deferred.promise;
      },
      set: function(data){
        var deferred = $q.defer();
        console.log('Called SET');
        localStorage.setItem('mock-userdata', JSON.stringify(data));
        deferred.resolve(null);
        return deferred.promise;
      }
    };

    // Public API here
    return {
      isAuthenticated: function () {
        return !_.isUndefined(currentUser.id) && currentUser.id !== 0;
      },
      requireLogin: function() {
        var deferred = $q.defer();
        var that = this;
        this.getAuthData().then(function(){
          if(!that.isAuthenticated()) {
            $location.path('login');
          }
          deferred.resolve();
        });
        return deferred.promise;
      },
      isAuthRoute: function(routeName) {
        return _.indexOf(authRoutes, routeName) !== -1;
      },
      currentUser: function() {
        return currentUser;
      },
      authenticate: function(authData) {
        var deferred = $q.defer();
        switch(authData.username) {
          case 'client':
          case 'entrepreneur':
          case 'livreur':
          case 'restaurateur':
            currentUser = {type: authData.username, name: 'Mr. Phine', id: 1};
            dbo.set(currentUser).then(deferred.resolve);
            break;
          default :
            deferred.resolve({which: 'username', error: 'Wrong Username'});
        }
        return deferred.promise;
      },
      destroyToken: function(){

      },
      _setUser: function(user) {
        // Prototype Function for view example
        var deferred = $q.defer();
        currentUser = user;
        dbo.set(currentUser).then(deferred.resolve);
        return deferred.promise;
      },
      logout: function(){
        var deferred = $q.defer();
        currentUser = {};
        $q.when(dbo.set({})).then(deferred.resolve);
        return deferred.promise;
      },
      getAuthData: function(){
        var deferred = $q.defer();
        if(!fetchedAuthData) {
          fetchedAuthData = true;
          $q.when(dbo.get()).then(function(userData){
            currentUser = userData;
            deferred.resolve(currentUser);
          });
        } else {
          deferred.resolve(currentUser);
        }
        return deferred.promise;
      }
    };
  });
