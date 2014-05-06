angular.module('ActivitiesApp')
	.controller('AlphabetizeController', function($scope) {
		$scope.words = ['Cat', 'Hat', 'Mat'];
		shuffle($scope.words);
		function shuffle(o){ //v1.0
    		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    		return o;
		};
	})