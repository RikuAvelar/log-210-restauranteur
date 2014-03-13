'use strict';

describe('Controller: RestaurateursCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RestaurateursCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestaurateursCtrl = $controller('RestaurateursCtrl', {
      $scope: scope
    });
  }));

  it('should do something', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
