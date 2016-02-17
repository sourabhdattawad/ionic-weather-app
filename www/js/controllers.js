angular.module('app.controllers',[])

.controller('appController', function($scope, $log){
	$log.info('App ctrl');
})

.controller('weatherController', function($scope,$log){
	$log.info('weather Controller');
});