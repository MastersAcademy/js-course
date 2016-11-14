(function () {
// 1. Create empty array - myArray
console.log(' - 1 - Created empty array - myArray'); 

var myArray = []; 

console.log('myArray');	// check array

//2. Filling myArray
console.log(' - 2 - Filled myArray');	
	
	for (var i = 1; i <=100; i++) {
		function randomInteger(min, max) {
  	var rand = min - 0.5 + Math.random() * (max - min + 1);
  	rand = Math.round(rand);
  	return rand; // returning 100 numbers between 1 - 100 values
  	}
		
		myArray.push(randomInteger(1, 100)); // adding values to array
	
	}	
console.log(myArray); // show all elements

// 3. Function findMinMax
console.log(' - 3 - Function findMinMax');

var arrayToFind = myArray; // get array

function findMinMax(arrayToFind, line){
	
	if (line == 'max') {
		return 'Array maximum number  = ' + Math.max.apply(Math, myArray); // searching max value
	}

	if (line == 'min') {
		return 'Array minimum number  = ' + Math.min.apply(Math, myArray); // searching min value
	}
}

var resultMax = findMinMax(arrayToFind, 'max'); // asking max value
var resultMin = findMinMax(arrayToFind, 'min'); // asking min value

console.log(resultMax); // showing max value
console.log(resultMin); // showing min value

// 4. Convert array to object
console.log(' - 4 - Convert array to object');					

var ArrForObj = [];

for (var f = 1; f <=30; f++) {
	ArrForObj.push(f);
}

function convertArrayToObj(convertedArr) {
 
	var obj = {};																						// Create new object
	var charCount = 26; 																		// 26 english letters
	var num = 1;																						// start number for increase 

	for (var i = 0; i < convertedArr.length; i++) {					// start iteration ArrForObj
		if (charCount > 0) {																	// if enlish symbols > 0
			obj[String.fromCharCode(97 + i)] = convertedArr[i];	// adding to obj symbols = ArrForObj elements
		} 
		else {																								// if enlish symbols < 0
			obj[num] = convertedArr[i];													// adding to obj num var = ArrForObj elements
			num++;																							// increase  var num value
    }
	charCount--;																						// decrease char code val of english letters
	}
	return obj;																							// returning object
}

var myObj = convertArrayToObj(ArrForObj);									// Calling convertArrayToObj
console.log(myObj);    																		// show inconsole

// 5. filtering data
console.log(' - 5 - Filtering array data');					

var newData = [2, 12, 22, 6, 32];										// Array newData

var oldData = [12, 5, 7, 17, 22, 32]; 							// Array oldData

	function filterNew(newArray, oldArray) {

    for (var h = 0; h < newArray.length; h++) {			// Iterations newData array - searching values
       
      oldArray.forEach(function(oldDataArrayElem){  // Iterations oldData array - searching values
         
        if (newArray[h] == oldDataArrayElem){				// Comparisons values both arrays 
          
          newArray.splice(h, 1);										// Splice used if values is same
         
          h--;																			// Decrease index newData array iterations
      
        }
      });
    }
	}

filterNew(newData, oldData);

console.log(newData);

})();
