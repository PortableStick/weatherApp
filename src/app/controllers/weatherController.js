(function(){

	'use strict';

	angular.module('weatherApp')
		.controller('WeatherController', ['forecast', '$scope','$geolocation', 'getCity',  '$log', function(forecast, $scope, $geolocation, getCity, $log){
			
			$geolocation.getCurrentPosition()
				.then(function(position){
					var longitude = position.coords.longitude,
						latitude = position.coords.latitude;

					$scope.currentPosition = latitude + ',' + longitude;

					forecast($scope.currentPosition)
						.success(function(data){
							$scope.daily = data.daily.data;
							$scope.currently = data.currently;
						});

					getCity($scope.currentPosition)
						.success(function(result){
							$scope.city = result.results[0].address_components.filter(function(component){
								return component.types[0] === 'locality';
							}).map(function(city){
								return city.long_name;
							})[0];

							$scope.state = result.results[0].address_components.filter(function(component){
								return component.types[0] === 'administrative_area_level_1';
							}).map(function(state){
								return state.long_name;
							})[0];

						});
						



				}).catch(function(error){
					$log.log(error.error.message);
					$scope.error = error.error.message;
				});

		}]);
})();