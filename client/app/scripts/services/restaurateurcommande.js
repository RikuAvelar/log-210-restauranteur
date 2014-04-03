'use strict';

angular.module('clientApp')
  .factory('RestaurateurCommande', function ($resource, AuthService) {
    var restOrders = $resource('/api/restaurants/:id/commandes/', {restaurateur_id: AuthService.currentUser().id, id: '@id'}, {
      'all': {method: 'GET', isArray: true},
      'get': 'GET'
    });

    return restOrders;
  });
