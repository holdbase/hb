'use strict';

//Setting up route
angular.module('homeModule').config(['$stateProvider',
	function($stateProvider) {
		// Projects state routing
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/app/home/views/home.html'
			});
	}
]);