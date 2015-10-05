(function(){

	'use strict';

	angular.module('temperatureFilters',[])
		.filter('farenheit', function(){
			return function(input){
				return Math.round(input) + '\xB0';
			}
		});

})();