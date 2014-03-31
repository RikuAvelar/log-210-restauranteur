'use strict';

angular.module('clientApp')
  .factory('Menu', function ($resource, AuthService) {
    var menu = $resource('/api/menus/:id', {id: '@id'}, {
      'getOwn': {
        method: 'GET',
        params: {'filter_by[restaurateur]': AuthService.currentUser().id},
        isArray: true
      },
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
