'use strict';

angular.module('agileRetroApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/agileboard', {
        templateUrl: 'app/agileboard/agileboard.html',
        controller: 'AgileboardCtrl'
      });
  });
