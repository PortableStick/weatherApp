(function(){

	'use strict';

	angular.module('temperatureFilters',[])
		.filter('temperature', function(){
			return function(input, setting){
				if(setting){
					return Math.round(input) + '\xB0';
				} else{
					input = (input - 32)/ 1.8;
					return Math.round(input) + '\xB0';
				}
				
			};
		});

})();