(function(){

	'use strict';

	angular.module('weatherApp')
		.factory('getCity', ['$http', function($http){
			return function(currentLocation){
				var key = "AIzaSyAvoe28O6Os9VRfSTqdWrqQAX1X3dUmgJo";
				return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + currentLocation + '&key=' + key);
		};
	}]);

}());

