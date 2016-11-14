/**
 * Created by Admin on 12.11.2016.
 */
(function () {

	var array = []; // task 1

	for (var i = 0; i < 100; i++) {
		array.push(Math.round(Math.random() * 100)); // task 2
	}

	function findMinMax(arrayToFind, string) { // task 3
		if (string == 'max') {
			return Math.max.apply(Math, array);
		} else if (string == 'min') {
			return Math.min.apply(Math, array);
		} else {
			return array;
		}
	}

	var resultMax = findMinMax(array, 'max');
	var resultMin = findMinMax(array, 'min');

	console.log(resultMax);
	console.log(resultMin);

	function convertArrayToObj(array) { // task 4

		var obj = {},
			j = 1;

		for (var i = 0; i <= array.length - 1; i++) {

			var key = String.fromCharCode(i + 97);

			if (97 + i >= 123) {
				obj[j] = array[i]; // numbers
				j++;
			} else {
				obj[key] = array[i]; // 'alphabet'
			}

		}

		return obj;
	}

	var resultConvertArrayToObj = convertArrayToObj(array);

	console.log(resultConvertArrayToObj);

	// task5

	var newData = [2, 12, 22, 6, 32];
	var oldData = [12, 5, 7, 17, 22, 32];

	filterNew(newData, oldData);

	function filterNew(array1, array2) {
		for (var i = 0; i < array1.length; i++) {
			array2.forEach(function (j) {
				if (array1[i] === j) {
					array1.splice(i, 1);
					i--;
				}
			});
		}
	}

	console.log(newData); // in console : [2, 6];

	// fixes

	var arr1 = [2, 2, 3, 3, 15];
	var arr2 = [2, 3, 10];

	filterNew(arr1, arr2);

	console.log(arr1);

})();
