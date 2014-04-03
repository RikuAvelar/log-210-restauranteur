'use strict';

describe('Service: Commande', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var Commande;
  beforeEach(inject(function (_Commande_) {
    Commande = _Commande_;
  }));

  it('should do something', function () {
    expect(!!Commande).toBe(true);
  });

});
