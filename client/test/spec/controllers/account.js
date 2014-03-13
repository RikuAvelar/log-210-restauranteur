'use strict';

describe('Controller: AccountCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountCtrl = $controller('AccountCtrl', {
      $scope: scope
    });
    scope.addresses = [{
      address: '155 Mart Street',
      city: 'Bergingham',
      province: 'Minneberta',
      postalCode: 'n0n 0n0',
      country: 'CA',
      isDefault: true
    }];
  }));

  it('should be able to list a full address from the Address Model', function () {
    expect(scope.addresses.length).toBe(1);
    var address = scope.addresses[0];
    expect(scope.fullAddress(address)).toBe('155 Mart Street, Bergingham, Minnerberta, n0n n0n, CA [Default]');
  });
});
