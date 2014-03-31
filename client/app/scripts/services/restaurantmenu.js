'use strict';

angular.module('clientApp')
  .factory('RestaurantMenu', function ($resource) {
    var menu = $resource('/api/restaurants/:restaurant_id/menus/:id', {id: '@id', restaurant_id: '@restaurant_id'}, {
      'get': 'GET',
      'allFor': {method: 'GET', isArray: true},
      'all': {method: 'GET', isArray: true, url: '/api/menus'},
      'put': {method: 'PUT'},
      '$update': {method: 'PUT'}
    });

    return menu;
  });
