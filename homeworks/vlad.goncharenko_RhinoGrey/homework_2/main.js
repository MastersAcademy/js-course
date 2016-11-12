(function () {


	//----------------------------------------------1----------------------------------------------------//
	var randomNumbers = [];


	//----------------------------------------------2----------------------------------------------------//
	function returnRandom() {

    	return (Math.random() * (100 - 1) + 1).toFixed(0); //Random numbers generator

	}


	for (var i = 0; i < 100; i++) {

		randomNumbers.push(returnRandom()); //Random numbers pusher
	}

	console.log(randomNumbers);

	//----------------------------------------------3----------------------------------------------------//


	var arrayToFind = [3, 6, 0, -6, 12];


	function findMinMax(arrayToFind, MinMax) {

		var minMaxValue = 0;

		if (MinMax == 'max') {

			for (var index in arrayToFind) {

				if (minMaxValue < arrayToFind[index]) {

					minMaxValue = arrayToFind[index];
				}
			}

		} else if (MinMax == 'min') {

			for (var index in arrayToFind) {

				if (minMaxValue > arrayToFind[index]) {

					minMaxValue = arrayToFind[index];
				}
			}
		}

		return minMaxValue;

	}

	var resultMax = findMinMax(arrayToFind, 'max');

	var resultMin = findMinMax(arrayToFind, 'min');

	console.log(resultMax);
	
	console.log(resultMin);

	//----------------------------------------------4----------------------------------------------------//


	function convertArrayToObj (array) { //Array to object convertor

		var obj = {};

		var alphabet = 'abcdefghijklmnopqrstuvwxyz';

		var i = 1;

		obj = {};

		for (var index in randomNumbers) {

			if (index < 26) {

				key = alphabet.charAt(+index);

				obj[key] = randomNumbers[index];

			} else if (i < randomNumbers.length - 1) {

				obj[' ' + i] = randomNumbers[index];

				i++;

			}
		}

	return obj;

	}

	console.log(convertArrayToObj(randomNumbers));

	//----------------------------------------------5----------------------------------------------------//

	function filterNew (newData, oldData) { //Array comparator

		for (var indexOld in oldData ) {

			for (var indexNew in newData) {

				if (newData[indexNew] == oldData[indexOld]) {

					newData.splice(indexNew, 1);

				}

			}

		}


	}

	var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);

    console.log(newData); // in console : [2, 6];


 }());