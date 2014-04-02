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
