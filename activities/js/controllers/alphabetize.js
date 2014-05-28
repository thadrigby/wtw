angular.module('ActivitiesApp')
.controller('AlphabetizeController', function($scope) {
	var randomRotation = function _randomRotation() {
    		return Math.floor(Math.random() * 40 - 20);
    	},
    wordSeeds = ['A', 'B', 'C']
    //wordSeeds = ['Bat', 'Cat', 'Fat', 'Hat', 'Mat', 'Nat', 'Pat', 'Rat', 'Sat', 'Vat'];

	$scope.words = [];

	var i = wordSeeds.length;

	while (i--) {
		$scope.words.push({
			text: wordSeeds[i],
			visibility: 'visible', 
			rotation: randomRotation(),
			translateX: randomRotation(),
			translateY: randomRotation()
		});		
	}

	$scope.wordStyle = function(word) {
		return {
			'-webkit-transform': 'rotate(' + word.rotation + 'deg) translateX(' + word.translateX + 'px) translateY(' + word.translateY + 'px)',
			'visibility': word.visibility
		}
	}



    $scope.shuffle = function(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random()
           * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
    };
	
	$scope.shuffle($scope.words);



	// NEW ALPHABETIZED LIST
	// this is the where the words will go once they have been clicked in alphabetical
	// order.  
	$scope.newAlphabetizedList = [];

	$scope.shake = function(word) {
			jquerySelector = "li:contains('" + word.text + "')"		
			$( jquerySelector ).addClass( "animated shake" );
		
		var delay = setTimeout(function(){
	        $(jquerySelector).removeClass("animated shake");
	     }, 800)
	
	}

	$scope.alphabetize = function(word) {
		var indexOfLowestWord;

		for (var i = 0; i < $scope.words.length; i++) {
			if ($scope.words[i].visibility === 'visible' && (indexOfLowestWord === undefined || $scope.words[i].text < $scope.words[indexOfLowestWord].text)) {
				indexOfLowestWord = i;
			}
		}

		if (word == $scope.words[indexOfLowestWord]) {
			
			$scope.words[indexOfLowestWord].visibility = 'hidden';
			$scope.newAlphabetizedList.push(word.text)
		} else {
			$scope.shake(word)
		} 

		//FINISHED 
		//
		if ($scope.newAlphabetizedList.length === $scope.words.length) {
    		alert ('Congratulations')
	}


}







    
});



