'use strict';

angular.module('clientApp')
  .factory('RestaurateurCommande', function ($resource, AuthService) {
    var restOrders = $resource('/api/restaurants/commandes/', {restaurateur_id: AuthService.currentUser().id}, {
      'all': {method: 'GET', isArray: true},
    });

    return restOrders;
  });
