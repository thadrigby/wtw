angular.module('ActivitiesApp')
	.controller('AlphabetizeController', function($scope) {
		$scope.words = ['Cat', 'Hat', 'Mat', 'Rat', 'Bat', 'Sat', 'Pat', 'Fat', 'Vat'];
    $scope.shuffle = function(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random()
           * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
    };
		$scope.shuffle($scope.words);


	// this is putting the words into and array and checking every time a word is moved, then 
	// chaning the array to the new order of words
    $scope.dragStart = function(e, ui) {
        ui.item.data('start', ui.item.index());
    }
    
    $scope.dragEnd = function(e, ui) {
        var start = ui.item.data('start');
        var end = ui.item.index();
        
        $scope.words.splice(end, 0, $scope.words.splice(start, 1)[0]);
        
        $scope.$apply();
    }
        
    var sortableEle = $('#sortable').sortable({
        start: $scope.dragStart,
        update: $scope.dragEnd
    });


    
    // when clicking on submit it will check to see it the words are in alphabetical order
    // $scope.submit = function() {
    // 	for (var i=0; i < $scope.words.length; i++) {
    // 		if ($scope.words[i+1]){
	   //  		if ($scope.words[i].charAt(0) > $scope.words[i+1].charAt(0)) {
	   //  			alert('wrong');
	   //  			return false;
    // 			}
    // 		}
    // 	}
    // 	alert('right');
    // }


    // this is for the modal on clicking the submit button
    // $('submit').modal(options);

	    $scope.submit = function() {
	    	$('#submit').click(function() {

	    		$('#submit').modal('show');
	    	});
	    };



});





