angular.module('ActivitiesApp', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
		.when('/alphabetize', {
			templateUrl: 'alphabetize.html',
			controller: 'AlphabetizeController'
		})

		.when('/vowels/sounds', {
			templateUrl: 'vowel_sounds.html',
			// contoller: 'VowelSoundsController'
		})
})



	 // $(function() {
		//  $( "#sortable" ).sortable();
		//  $( "#sortable" ).disableSelection();
	 // });
