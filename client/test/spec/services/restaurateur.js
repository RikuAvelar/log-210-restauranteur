'use strict';

describe('Service: Restaurateur', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var Restaurateur;
  beforeEach(inject(function (_Restaurateur_) {
    Restaurateur = _Restaurateur_;
  }));

  it('should do something', function () {
    expect(!!Restaurateur).toBe(true);
  });

});
