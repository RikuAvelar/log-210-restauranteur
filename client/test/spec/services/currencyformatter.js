'use strict';

describe('Service: CurrencyFormatter', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var CurrencyFormatter;
  beforeEach(inject(function (_CurrencyFormatter_) {
    CurrencyFormatter = _CurrencyFormatter_;
  }));

  it('should do something', function () {
    expect(!!CurrencyFormatter).toBe(true);
  });

});
