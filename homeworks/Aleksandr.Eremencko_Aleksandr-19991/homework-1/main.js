(function () {
	
	/*task №1*/
	
    var grusha = [];
	
	/*task №2*/
	
    for (i = 0; i <= 99; i++){
	    grusha.unshift(Math.round( Math.random() * 100 ));
    };	
    console.log(grusha);//answer task №2

    /*task №3*/
	
    var arrayToFind = [3, 6, 0, -6, 12];
    function findMinMax (arrayTask3, x) {
	    if ( x == "max" ) {return Math.max.apply({}, arrayTask3);}
	    else if ( x == "min" ) {return Math.min.apply({}, arrayTask3);};
    };
    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');
    console.log(resultMax); //Max answer task №3
    console.log(resultMin); //Min answer task №3

    /*task №4*/

    var array = [3, 6, 0, -6, 12, 10, 13, 56, 84, 34, 14, 34, 34, 23, 11, 33, 534, 34, 22, 54, 65, 76, 87, 44, 34, 56, 57, 74, 34, 56, 43, 23];
    function convertArrayToObj (array) {
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var obj = {};
		console.log(obj);//answer
        for (i = 0; i < array.length; i++){
	        if (i < 26) {obj[alphabet[i]] = array[i];}
	        else {obj[i - 25] = array[i];};
        };
		return obj;
	};
	convertArrayToObj (array);
    
	/*task №5*/
	
    var newData = [2, 12, 22, 6, 32, 33, 35, 41];
    var oldData = [12, 5, 7, 17, 22, 32, 35, 37, 33];	
    function filterNew (arr1, arr2) {
	    for (var i = 0; i < arr1.length; i++) {
	        for (var j = 0; j < arr2.length; j++) {
	            switch (arr1[i]) {
				    case (arr2[j]): arr1.splice(i, 1); i-- ;
				    break
		        };
		    };				
	    };
    };
	filterNew (newData, oldData);				
	console.log(newData);//answer           
   			  	      
})();	