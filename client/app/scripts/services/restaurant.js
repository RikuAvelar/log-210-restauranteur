'use strict';

angular.module('clientApp')
  .factory('Restaurant', function ($resource, AuthService) {
    var menu = $resource('/api/restaurants/:id', {id: '@id'}, {
      'get': 'GET',
      'all': {method: 'GET', isArray: true},
      'put': {method: 'PUT'},
      '$update': {method: 'PUT'}
    });

    return menu;
  });

/**
* create => 'POST' (no ID)
* index => 'GET' (without ID)
* show => 'GET' (with ID)
* update => 'PUT' (needs ID)
* destroy => 'DELETE' (needs ID)
**/
