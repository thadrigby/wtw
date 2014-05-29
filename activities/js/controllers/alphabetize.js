angular.module('ActivitiesApp')

.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
})

.controller('AlphabetizeController', function($scope) {
	$scope.modalShown = false;
  	$scope.toggleModal = function() {
	    $scope.modalShown = !$scope.modalShown;
	  };

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
			// When the last word is clicked a congratulations modal appears
			if ($scope.newAlphabetizedList.length === $scope.words.length) {
	    		$scope.toggleModal()
			}


	}






    
})






