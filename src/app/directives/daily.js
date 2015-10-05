(function(){
	'use strict';

	angular.module('weatherApp')
	.directive('dailyWeather', function(){
		return{
			restrict: 'E',
			templateUrl: 'app/directives/daily.html',
		};
	});
}());