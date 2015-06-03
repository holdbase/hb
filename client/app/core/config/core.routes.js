'use strict';

//Setting up route
angular.module('core').config(['$stateProvider',
	function($stateProvider) {
		// Projects state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: '/index.html'
		});
	}
]);