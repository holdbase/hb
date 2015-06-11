'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', '$urlRouterProvider',
	function($locationProvider, $urlRouterProvider) {		
		$urlRouterProvider.otherwise('/#'); 
        $locationProvider.html5Mode(false).hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
  
angular.module(ApplicationConfiguration.applicationModuleName).run(['$templateCache', '$rootScope', '$state', '$stateParams', '$location', 'appName',
    function ($templateCache, $rootScope, $state, $stateParams, $location, appName) {

        var view = angular.element('#ui-view');

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.appName = appName;  
        $rootScope.appMark = ApplicationConfiguration.applicationModuleName;

        $rootScope.$on('onError', function (event, status, message, url) {
            switch (status) {
                case 0: //ajax 未初始化 服务器无响应
                    $location.path('/login');
                    break;
                case 401: /// 访问限制 应转至提示页面                    
                    break;
                default:
                    break;
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.fromState = fromState;
            $rootScope.fromParams = fromParams;
            $rootScope.toState = toState;
            $rootScope.toParams = toParams; 
        }); 
    }]);