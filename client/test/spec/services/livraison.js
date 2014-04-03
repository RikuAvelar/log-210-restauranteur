'use strict';

describe('Service: Livraison', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var Livraison;
  beforeEach(inject(function (_Livraison_) {
    Livraison = _Livraison_;
  }));

  it('should do something', function () {
    expect(!!Livraison).toBe(true);
  });

});
