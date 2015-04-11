'use strict';

/**
 * @ngdoc function
 * @name agileRetroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agileRetroApp
 */
angular.module('agileRetroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
