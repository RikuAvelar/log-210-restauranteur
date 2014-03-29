'use strict';

angular.module('clientApp')
  .factory('TokenHandler', function Tokenhandler() {
    var token = '';
    return {
      set: function(newToken) {
        token = newToken;
      },
      destroy: function() {
        token = '';
      },
      get: function(){
        return token;
      }
    }
  });
