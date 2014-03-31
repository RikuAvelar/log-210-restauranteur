'use strict';

angular.module('clientApp')
  .factory('Restaurateur', function ($resource, AuthService) {
    var restaurateur = $resource('/api/restaurateurs/:id', {id: '@id'}, {
      'get': 'GET',
      'all': {method: 'GET', isArray: true},
      'put': {method: 'PUT'},
      '$update': {method: 'PUT'}
    });

    return restaurateur;
  });

/**
* create => 'POST' (no ID)
* index => 'GET' (without ID)
* show => 'GET' (with ID)
* update => 'PUT' (needs ID)
* destroy => 'DELETE' (needs ID)
**/
