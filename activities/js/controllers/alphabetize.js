angular.module('ActivitiesApp')
	.controller('AlphabetizeController', function($scope) {
		$scope.words = ['Cat', 'Hat', 'Mat', 'Rat', 'Bat', 'Sat', 'Pat', 'Fat', 'Vat'];
    $scope.shuffle = function(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random()
           * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
    };
		$scope.shuffle($scope.words);


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

    $scope.submit = function() {
    	for (var i=0; i < $scope.words.length; i++) {
    		if ($scope.words[i+1]){
	    		if ($scope.words[i].charAt(0) > $scope.words[i+1].charAt(0)) {
	    			alert('wrong');
	    			return false;
    			}
    		}
    	}
    	alert('right');
    }
});





