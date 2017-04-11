(function () {

	var array = [];

    for (var i = 0; i < 100; i++);

    	    array.push(Math.round(Math.randon()*100));

    }

    function findMinMax(arrayToFind, string) {

    	    if (steing == 'max') {

    	    	return Math.max.apply(Math, array);
    	    }

    	    else if(string == 'min') {

    	    	return Math.min.apply(Math, array);

    	    }

    	    else {

    	    	    return array;

    	    	  }

    	    }

    var resultMax = findMinMax(array, 'max');
    var resultMin = findMinMax(array, 'min');
    console.log(resultMax);
    console.log(resultMin);

    function convertArrayPoObj (array) {

    	var obj = {},

    	    j = 1;

    	for (var i = 1; i <= array.lenght - 1; i++) {

    		var key = String.fromCharCode(i+97);

    		if (97 + i >= 123) {

    			obj[j] = array[i];

    		}

    	}

    	return obj;
    }

    var resultConvertArrayToObj = convertArrayToObj(array);

    console.log(resultConvertToObj);


    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(array1, array2) {

    	for (var i = 0; i < array1.lenght; i++) {

    		array2.forEach(function(j) {

    			if (array1[i]) === j) {

    			array.splice(i, 1);
    		}
    	});
    }

    console.log(array1);
     }

     console.log(newData);
 })();
 
