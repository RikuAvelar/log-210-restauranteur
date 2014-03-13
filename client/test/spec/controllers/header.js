'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var HeaderCtrl,
    scope,
    AuthServiceMock,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    AuthServiceMock = new angular.mock.AuthService();
    HeaderCtrl = $controller('HeaderCtrl', {
      $scope: scope,
      AuthService: AuthServiceMock,
      $location: location
    });
  }));

  describe('Menu Population', function(){
    it('should be populated with only login and register when not Authenticated', function () {
      expect(scope.menuItems.length).toBe(2);
      expect(scope.menuItems[0].location).toBe('/login');
      expect(scope.menuItems[1].location).toBe('/signup');
    });

    it('should be populated with the correct menu items if user is Authenticated', function(){
      // Client
      AuthServiceMock._setUser('client');
      scope.$digest(); // Triggers the watch on AuthService.currentUser()
      expect(scope.menuItems.length).toBe(3);
      expect(scope.menuItems[0].location).toBe('/orderUp');
      expect(scope.menuItems[1].location).toBe('/account');
      expect(scope.menuItems[2].name).toBe('Logout'); //Logout doesn't use a route, but calls the Auth function

      // Livreur
      AuthServiceMock._setUser('livreur');
      scope.$digest(); // Triggers the watch on AuthService.currentUser()
      expect(scope.menuItems.length).toBe(2);
      expect(scope.menuItems[0].location).toBe('/delivery');
      expect(scope.menuItems[1].name).toBe('Logout'); //Logout doesn't use a route, but calls the Auth function

      // Entrepreneur
      AuthServiceMock._setUser('entrepreneur');
      scope.$digest(); // Triggers the watch on AuthService.currentUser()
      expect(scope.menuItems.length).toBe(2);
      expect(scope.menuItems[0].location).toBe('/restaurateurs');
      expect(scope.menuItems[1].name).toBe('Logout'); //Logout doesn't use a route, but calls the Auth function

      // Entrepreneur
      AuthServiceMock._setUser('restaurateur');
      scope.$digest(); // Triggers the watch on AuthService.currentUser()
      expect(scope.menuItems.length).toBe(3);
      expect(scope.menuItems[0].location).toBe('/orders');
      expect(scope.menuItems[1].location).toBe('/restaurateurs');
      expect(scope.menuItems[2].name).toBe('Logout'); //Logout doesn't use a route, but calls the Auth function
    });

    it('should logout a user if logout is selected', function(){
      AuthServiceMock._setUser('client');
      scope.$digest();
      expect(scope.menuItems[2].name).toBe('Logout'); //Logout doesn't use a route, but calls the Auth function
      scope.menuItems[2].callback();
      expect(AuthServiceMock.currentUser()).toEqual({});

      AuthServiceMock._setUser('livreur');
      scope.$digest();
      expect(scope.menuItems[1].name).toBe('Logout'); //Logout doesn't use a route, but calls the Auth function
      scope.menuItems[1].callback();
      expect(AuthServiceMock.currentUser()).toEqual({});

      AuthServiceMock._setUser('restaurateur');
      scope.$digest();
      expect(scope.menuItems[2].name).toBe('Logout'); //Logout doesn't use a route, but calls the Auth function
      scope.menuItems[2].callback();
      expect(AuthServiceMock.currentUser()).toEqual({});

      AuthServiceMock._setUser('entrepreneur');
      scope.$digest();
      expect(scope.menuItems[1].name).toBe('Logout'); //Logout doesn't use a route, but calls the Auth function
      scope.menuItems[1].callback();
      expect(AuthServiceMock.currentUser()).toEqual({});

      expect(location.path()).toBe('/login');
    });
  });

  it('should detect if the current location is the active one or not', function(){
    location.path('/login');
    expect(scope.isActive('/login')).toBe(true);
    expect(scope.isActive('/signout')).toBe(false);

    location.path('');
    expect(scope.isActive('/')).toBe(true);
  });

  it('should be able to correctly interpret the href from the menu items', function(){
    var menuItem = {
      location: '/login'
    };
    expect(scope.itemLocation(menuItem)).toBe('#/login');

    menuItem.location = 'login';
    expect(scope.itemLocation(menuItem)).toBe('#/login');

    menuItem.location = '';
    expect(scope.itemLocation(menuItem)).toBe('');

    menuItem.location = ' ';
    expect(scope.itemLocation(menuItem)).toBe('');

    menuItem.location = 34;
    expect(scope.itemLocation.bind(scope, menuItem)).toThrow();
    menuItem.location = null;
    expect(scope.itemLocation.bind(scope, menuItem)).toThrow();
    menuItem.location = undefined;
    expect(scope.itemLocation.bind(scope, menuItem)).toThrow();
    menuItem.location = function(){};
    expect(scope.itemLocation.bind(scope, menuItem)).toThrow();
  });
});
