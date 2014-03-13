'use strict';

describe('Directive: passwordVerify', function () {

  // load the directive's module
  beforeEach(module('clientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should be valid if the passwords match', inject(function ($compile) {
    scope.password = 'test';
    element = angular.element('<input password-verify="password" ng-model="confirm" value="test">');
    element = $compile(element)(scope);
    expect(element.$valid).toBe(true);
  }));
});
