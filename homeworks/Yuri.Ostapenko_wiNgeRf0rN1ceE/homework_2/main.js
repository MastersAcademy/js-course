(function() {

	//1) Create an empty array

	var emptyArray = [];

	//2) Adding an array of numbers from 1 to 100

	for (var counterArray = 0; counterArray < 100; counterArray++) {

		emptyArray.push(Math.floor(Math.random() * (100 - 1) + 1));

	}

	console.log('Array from 1 to 100 ' + emptyArray);

	//3) Creating function for max and min elements of the array

	var arrayToFind = [3, 6, 0, -6, 12];

	function findMinMax(array, str) {

		if (str == 'max') {
			return Math.max.apply(null, array);
		} 

		if (str == 'min') {
			return Math.min.apply(null, array);
		}

	};

	var resultMax = findMinMax(arrayToFind, 'max');

	var resultMin = findMinMax(arrayToFind, 'min');

	console.log('Array ' + arrayToFind);

	console.log('Max = ' + resultMax);

	console.log('Min = ' +resultMin);

	//4) Creating function for convert an array into an object

	function convertArrayToObj (array) {

		var obj = {};

		for ( var i = 0; i < array.length; i++) {

			if (i < 123 - 97) {
				obj[String.fromCharCode(97+i)] = array[i];
			} else {
				obj[i-25] = array[i];
			}
		}

		return obj;

	}

	console.log('Conversion results:');

	console.dir(convertArrayToObj(emptyArray));

	console.dir(convertArrayToObj(arrayToFind));

	//5) Creating a function to filter array

	var newData = [2, 12, 22, 6, 32],
		oldData = [12, 5, 7, 17, 22, 32];

	function filterNew (firstArray, secondArray) {

		for (var i = 0; i < firstArray.length; i ++) {

			secondArray.forEach( function(value) {
				var arrayElement = firstArray.indexOf(value);

				if (arrayElement > -1 ) {
					firstArray.splice(arrayElement, 1);
					arrayElement = firstArray.indexOf(secondArray[value]);
				}

			});

		}
	}
	
	console.log('Array newData = ' + newData);

	console.log('Array oldData = ' + oldData);
	

	filterNew(newData, oldData);

	console.log('The filter newData = ' + newData);

	var arr1 = [2, 2, 3, 3, 15]; 
	var arr2 = [2, 3, 10]; 

	filterNew(arr1, arr2);

	console.log('The filter arr1 = ' + arr1);


})();