'use strict';

describe('Service: AuthIntercept', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var AuthIntercept;
  beforeEach(inject(function (_AuthIntercept_) {
    AuthIntercept = _AuthIntercept_;
  }));

  it('should do something', function () {
    expect(!!AuthIntercept).toBe(true);
  });

});
