(function(){

	'use strict';

	angular.module('weatherApp') 
		.directive('error',function(){
			return {
				restrict: 'E',
				templateUrl: 'app/directives/error.html'
			};
		});

})()