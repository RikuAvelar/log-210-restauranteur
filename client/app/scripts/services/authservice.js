'use strict';

angular.module('clientApp')
  .factory('AuthService', function ($q, $location, $window, $http, growlNotifications, TokenHandler) {
    var currentUser = {};
    var fetchedAuthData = false;
    var tokenUrl = '/api/tokens';

    function authRoutes(userType) {
      switch(userType) {
        default:
          return ['/login', '/signup'];
      }
    }

    function createAuthToken(userInfo){
      if (userInfo) {
        return $http({method: 'POST', url: tokenUrl, data: userInfo});
      }
    }

    var _setUser = function(user, token) {
      // Prototype Function for view example
      var deferred = $q.defer();
      user.token = token;
      currentUser = user;
      dbo.set(currentUser).then(deferred.resolve);
      return deferred.promise;
    }

    var dbo = {
      get: function(){
        var deferred = $q.defer();
        deferred.resolve(JSON.parse(sessionStorage.getItem('restaurminator-userdata') || '{}'));
        return deferred.promise;
      },
      set: function(data){
        var deferred = $q.defer();
        sessionStorage.setItem('restaurminator-userdata', JSON.stringify(data));
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
        return _.indexOf(authRoutes(), routeName) !== -1;
      },
      currentUser: function() {
        return currentUser;
      },
      authenticate: function(authData) {
        var deferred = $q.defer();
        $q.when(createAuthToken(authData)).then(function(response){
          TokenHandler.set(response.data.token);
          $q.when(_setUser(response.data.user, response.data.token)).then(deferred.resolve);
        }, function(response){
          _.each(response.data.errors, function(err){
            growlNotifications.add(err.message, 'danger');
          });
          deferred.reject();
        });
        return deferred.promise;
      },
      destroyToken: function(){
        TokenHandler.destroy();
      },
      logout: function(){
        var deferred = $q.defer();
        currentUser = {};
        this.destroyToken();
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
