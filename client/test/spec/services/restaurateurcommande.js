'use strict';

describe('Service: RestaurateurCommande', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var RestaurateurCommande;
  beforeEach(inject(function (_RestaurateurCommande_) {
    RestaurateurCommande = _RestaurateurCommande_;
  }));

  it('should do something', function () {
    expect(!!RestaurateurCommande).toBe(true);
  });

});
