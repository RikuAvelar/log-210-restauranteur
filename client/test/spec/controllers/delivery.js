'use strict';

describe('Controller: DeliveryCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeliveryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeliveryCtrl = $controller('DeliveryCtrl', {
      $scope: scope
    });
  }));

  it('should do something', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
