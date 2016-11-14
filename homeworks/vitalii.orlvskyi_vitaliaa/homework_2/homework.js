(function () {
// First exercise

var arr = [];

//Second exercise

for (var i = 1; i <= 100; i++) {
	arr.push(Math.floor(Math.random() * 100 + 1));
}

//Third exercise

var arrayToFind = [1, 2, 3, 4, -5];

function findMinMax(arr, value) {
	if (value === 'max'){ 
		return Math.max.apply(null, arr); 
	} 	else if (value === 'min') { 
	    	return Math.min.apply(null, arr);
	 	} else {
	 		alert("Value error. Enter min or max second parameter");
	 	}

}
 var resultMax = findMinMax(arrayToFind, 'max');
 var resultMin = findMinMax(arrayToFind, 'min');

 console.log(resultMax); // 4
 console.log(resultMin); // -5

 //Fourth exercize
function convertArrayToObject() {
    var obj = {};
        for (var i = 0; i <= arr.length; i++){
            if (i <= 25){
                obj[String.fromCharCode(i + 97)] = arr[i];
            }
                else {
                    var value = i - 25;
                	obj[value.toString()] = arr[i];
                }
        }
    return obj;
   }

 //Fifth exercize

var newData = [2, 12, 22, 6, 32];
var oldData = [12, 5, 7, 17, 22, 32];

function filterNew(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			if ( arr1[i] === arr2[j]) delete arr1[i];
		}
	}
}
filterNew(newData, oldData);

console.log(newData);


}());