'use strict';

/**
 * @ngdoc function
 * @name agileRetroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the agileRetroApp
 */
angular.module('agileRetroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
