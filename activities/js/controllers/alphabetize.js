angular.module('ActivitiesApp')
.controller('AlphabetizeController', function($scope) {
	var randomRotation = function _randomRotation() {
    		return Math.floor(Math.random() * 40 - 20);
    	},
    wordSeeds = ['Bat', 'Cat', 'Fat', 'Hat', 'Mat', 'Nat', 'Pat', 'Rat', 'Sat', 'Vat'];

	$scope.words = [];

	var i = wordSeeds.length;

	while (i--) {
		$scope.words.push({
			text: wordSeeds[i],
			rotation: randomRotation(),
			translateX: randomRotation(),
			translateY: randomRotation()
		});		
	}

	$scope.wordStyle = function(word) {
		return {
			'-webkit-transform': 'rotate(' + word.rotation + 'deg) translateX(' + word.translateX + 'px) translateY(' + word.translateY + 'px)',
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

	$scope.alphabetize = function(word) {
		alert('click is working');
		for (var i=0; i < $scope.words.length; i++) {
    		if ($scope.words[i+1]){
	    		if ($scope.words[i] > $scope.words[i+1]) {
	    			alert('wrong');
	    			return false;
    			}
    		}
    	}
    	$scope.newAlphabetizedList.push()

	}



    
   // // when clicking on submit it will check to see it the words are in alphabetical order
   //  $scope.submit = function() {
   //  	for (var i=0; i < $scope.words.length; i++) {
   //  		if ($scope.words[i+1]){
	  //   		if ($scope.words[i] > $scope.words[i+1]) {
	  //   			// alert('wrong');
	  //   			// return false;
   //  			}
   //  		}
   //  	}
   //  	//alert('right');
   //  }

    
});