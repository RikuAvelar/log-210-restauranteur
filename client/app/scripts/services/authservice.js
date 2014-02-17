'use strict';

angular.module('clientApp')
  .factory('AuthService', function () {
    // Service logic
    // ...

    var currentUser = {};

    // Public API here
    return {
      isLoggedIn: function () {
        return !_.isUndefined(currentUser.id) || currentUser.id !== 0;
      },
      currentUser: function() {
        return currentUser;
      }
    };
  });
