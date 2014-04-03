'use strict';

angular.module('clientApp')
  .factory('Livraison', function ($resource, AuthService) {
    var restaurant = $resource('/api/livraisons/:id', {id: '@id', livreur_id: AuthService.currentUser().id}, {
      'get': 'GET',
      'all': {method: 'GET', isArray: true},
      'put': {method: 'PUT'},
      '$update': {method: 'PUT'}
    });

    return restaurant;
  });

/**
* create => 'POST' (no ID)
* index => 'GET' (without ID)
* show => 'GET' (with ID)
* update => 'PUT' (needs ID)
* destroy => 'DELETE' (needs ID)
**/
