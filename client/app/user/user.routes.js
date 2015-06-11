'use strict';

//Setting up route
angular.module('homeModule').config(['$stateProvider',
	function($stateProvider) {
		// Projects state routing
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: '/app/user/views/login.html'
			});
	}
]);