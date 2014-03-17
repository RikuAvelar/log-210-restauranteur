'use strict';

describe('Controller: ClientOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ClientOrderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientOrderCtrl = $controller('ClientOrderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
