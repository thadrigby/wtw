angular.module('ActivitiesApp')
.controller('AlphabetizeController', function($scope) {
	$scope.words = [
		{
			text: 'Cat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Hat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
		{
			text: 'Mat',
			rotation: _randomRotation(),
			translateX: _randomRotation(),
			translateY: _randomRotation()
		},
	];

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
    
   // when clicking on submit it will check to see it the words are in alphabetical order
    $scope.submit = function() {
    	for (var i=0; i < $scope.words.length; i++) {
    		if ($scope.words[i+1]){
	    		if ($scope.words[i] > $scope.words[i+1]) {
	    			alert('wrong');
	    			return false;
    			}
    		}
    	}
    	alert('right');
    }

    function _randomRotation() {
    	return Math.floor(Math.random() * 40 - 20);
    }
});