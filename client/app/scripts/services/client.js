'use strict';

angular.module('clientApp')
  .factory('Client', function ($resource) {
    var client = $resource('/api/clients/:id', {id: '@id'}, {
      'get': 'GET',
      'all': {method: 'GET', isArray: true},
      'put': {method: 'PUT'},
      '$update': {method: 'PUT'}
    });

    return client;
  });

/**
* create => 'POST' (no ID)
* index => 'GET' (without ID)
* show => 'GET' (with ID)
* update => 'PUT' (needs ID)
* destroy => 'DELETE' (needs ID)
**/
