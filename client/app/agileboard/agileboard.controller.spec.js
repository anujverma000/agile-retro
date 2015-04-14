'use strict';

describe('Controller: AgileboardCtrl', function () {

  // load the controller's module
  beforeEach(module('agileRetroApp'));

  var AgileboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgileboardCtrl = $controller('AgileboardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
