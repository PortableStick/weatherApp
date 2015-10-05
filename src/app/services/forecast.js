(function(){

	'use strict';

	angular.module('weatherApp')
		.factory('forecast', ['$http', function($http){
			return function(currentPosition){
				return $http.jsonp('https://api.forecast.io/forecast/97d8b0008bd0157fa87998a1a82270e7/' + currentPosition + '?callback=JSON_CALLBACK');
			};
	}]);
})();