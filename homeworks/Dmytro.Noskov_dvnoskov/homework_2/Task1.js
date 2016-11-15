(function () {

    console.log ('*************************************************************************');

    var newArray = [];
    
    for ( var i = 0; i < 100; i++ ) {
        newArray.push(Math.round(100 * Math.random()));
    }
    console.log(newArray);
    
    console.log ('*************************************************************************');
    
    function findMinMax(arrayToFind, fun){
        switch(fun) {
		case 'max' :
                return Math.max.apply(null,arrayToFind);
	        case 'min' :
	            return Math.min.apply(null,arrayToFind);
        }
    }
    var arrayToFind = [3, 6, 0, -6, 12];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax); // 12

    console.log(resultMin); // -6
    console.log ('*************************************************************************');
    function convertArrayToObj (array) {
    
    var obj = {};
    
        for ( var i = 0; i < array.length; i++ ) {	    
        var k	
            if (i < 26) {  k = String.fromCharCode(i+97); 
			} else  k = i - 26 ;   
        obj[k] = array[i];
        }
    return obj;
    }
    convertArrayToObj (newArray);
    console.log(convertArrayToObj (newArray));
    console.log ('*************************************************************************');
    
    function filterNew(arr1, arr2) {
	
	for ( var i = 0; i < arr1.length; i++ ) {
		for ( var j = 0; j < arr2.length; j++ ) {
		    if (arr1[i] == arr2[j]) {
		     arr1.splice(i,1)}
		}
	}
	};
    
    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);

    console.log(newData); // in console : [2, 6];
    console.log ('*************************************************************************');
})();
