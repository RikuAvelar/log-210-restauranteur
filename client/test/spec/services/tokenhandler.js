'use strict';

describe('Service: Tokenhandler', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var Tokenhandler;
  beforeEach(inject(function (_Tokenhandler_) {
    Tokenhandler = _Tokenhandler_;
  }));

  it('should do something', function () {
    expect(!!Tokenhandler).toBe(true);
  });

});
