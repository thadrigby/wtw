angular.module('ActivitiesApp')
	.controller('AlphabetizeController', function($scope) {
		$scope.words = ['Cat', 'Hat', 'Mat', 'Rat', 'Bat', 'Sat', 'Pat', 'Fat', 'Vat'];
    $scope.shuffle = function(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random()
           * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
    };
		$scope.shuffle($scope.words);

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
	});



