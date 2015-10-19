(function(){

	'use strict';

	angular.module('weatherApp')
	.directive('currentWeather', function(){
		return{
			restrict: 'E',
			templateUrl: 'app/directives/current.html',
		};
	});
	
}());