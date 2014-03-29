'use strict';

angular.module('clientApp')
  .factory('Menu', function ($resource, AuthService) {
    var menu = $resource('/api/menus/:id', null, {
      'getOwn': {
        method: 'GET',
        params: {'filter_by[restaurateur]': AuthService.currentUser().id},
        isArray: true
      },
      'all': {method: 'GET', isArray: true},
      'create': 'POST'
    });

    return menu;
  });
