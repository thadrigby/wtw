angular.module('ActivitiesApp', ['ngRoute', 'ui.sortable', 'ngAnimate'])

.config(function($routeProvider) {
	$routeProvider
		.when('/alphabetize', {
			templateUrl: 'alphabetize/alphabetize.html',
			controller: 'AlphabetizeController'
		})

		.when('/vowels/sounds', {
			templateUrl: 'vowel_sounds.html',
			// contoller: 'VowelSoundsController'
		})
})

