'use strict';

describe('Service: AddressFormatter', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var AddressFormatter;
  beforeEach(inject(function (_AddressFormatter_) {
    AddressFormatter = _AddressFormatter_;
  }));

  it('should do something', function () {
    expect(!!AddressFormatter).toBe(true);
  });

});
