'use strict';

angular.module('clientApp')
  .factory('Commande', function ($resource) {
    var commande = $resource('/api/commandes/:id', {id: '@id'}, {
      'get': 'GET',
      'all': {method: 'GET', isArray: true},
      'put': {method: 'PUT'},
      '$update': {method: 'PUT'}
    });

    return commande;
  });

/**
* create => 'POST' (no ID)
* index => 'GET' (without ID)
* show => 'GET' (with ID)
* update => 'PUT' (needs ID)
* destroy => 'DELETE' (needs ID)
**/
