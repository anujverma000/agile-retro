'use strict';

angular.module('agileRetroApp')
  .controller('AgileboardCtrl', function ($scope, $http, Auth, User) {
  		$scope.agileboards = [];
  		$http.get('/api/agileboards').success(function(agileboards) {
	      $scope.agileboards = agileboards;
	      socket.syncUpdates('agileboards', $scope.agileboards);
	    });

	    $scope.addAgileBoard = function() {
	      if($scope.name === '') {
	        return;
	      }
	      $http.post('/api/agileboards', { name: $scope.name, info: $scope.info, active: true });
	      $scope.newThing = '';
	    };
  });
