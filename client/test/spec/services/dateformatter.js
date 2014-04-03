'use strict';

describe('Service: DateFormatter', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var DateFormatter;
  beforeEach(inject(function (_DateFormatter_) {
    DateFormatter = _DateFormatter_;
  }));

  it('should do something', function () {
    expect(!!DateFormatter).toBe(true);
  });

});
