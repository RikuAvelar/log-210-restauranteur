'use strict';

angular.module('clientApp')
  .factory('Menu', function ($resource, AuthService) {
    var menu = $resource('/api/menus/:id', null, {
      'getOwn': {
        method: 'GET',
        params: {'filter_by[restaurateur]': AuthService.currentUser().id},
        isArray: true
      },
      'get': 'GET',
      'all': {method: 'GET', isArray: true},
      'create': 'POST'
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
