'use strict';

angular.module('clientApp')
  .factory('AuthIntercept', function ($q, $location, TokenHandler) {
    return {
      request: function(config) {
        config = config || {};
        config.headers.Authorization = TokenHandler.get();
        return config;
      },
      // optional method
      responseError: function(rejection) {
        // do something on error
        if (rejection.status === 401 && _.find(rejection.data.errors, {type: 'UnauthorizedError'})) {
          TokenHandler.destroy();
          $location.path('login');
        }
        return $q.reject(rejection);
      }
    };
  });
