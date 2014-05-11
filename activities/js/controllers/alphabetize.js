angular.module('ActivitiesApp')
	.controller('AlphabetizeController', function($scope) {
		$scope.words = ['Cat', 'Hat', 'Mat', 'Rat', 'Bat', 'Sat', 'Pat', 'Fat', 'Vat'];
    $scope.shuffle = function(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random()
           * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
    };
		$scope.shuffle($scope.words);

    // Although the lines below work, eventually let's refactor them out into a directive.
    //You never want to do jQuery DOM Manipulation type stuff in a controller.
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
	});



