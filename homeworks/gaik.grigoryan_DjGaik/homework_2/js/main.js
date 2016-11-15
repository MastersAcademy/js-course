(function () {
	// 1
	var arr = [];
	console.log(arr);

	// 2
	for (var i = 1; i <= 100; i++) {
		arr.push(Math.floor(Math.random() * 100) + 1);
	}
	console.log(arr);

	// 3
	var arrayToFind = [3, 6, 0, -6, 12];
	var resultMax = function findMinMax(arrayToFind) {
		if (!(arrayToFind instanceof Array)) {
			console.warn(arrayToFind, 'is not Array');
			return;
		}

		return arrayToFind.reduce(function (previous, curent, i, array) {
			return Math.max(curent, previous);
		});
	}
	console.log(resultMax(arrayToFind));

	var resultMin = function findMinMax(arrayToFind) {
		if (!(arrayToFind instanceof Array)) {
			console.warn(arrayToFind, 'is not Array');
			return;
		}
		return arrayToFind.reduce(function (previous, curent, i, array) {
			return Math.min(curent, previous);
		});
	}
	console.log(resultMin(arrayToFind));
	// 4
	function arrayToObject (array) {
		if ( !(array instanceof Array) ) {
			console.warn(array, ' is not Array');
			return;
		}
		var obj = {};

		array.forEach(function (value, i) {
			var key;
			if ( i < 26 ) {
				key = String.fromCharCode(i + 97);
			} else {
				key = i - 25;
			}
			obj[key] = value;
		});

		return obj;
	}

	var testArray = [];

	for (let y = 0; y < 100; y++) {
		testArray.push('value ' + (y + 1));
	}

	console.log( arrayToObject(testArray) );

	// 5
	var newData = [2, 12, 22, 6, 32];
	var oldData = [12, 5, 7, 17, 22, 32];

	filterNew(newData, oldData);

	function filterNew(newData,oldData) {
		for (var i = 0; i < oldData.length; i++){
			for (var x = newData.length - 1; x !== 0 ; x--) {
				if (newData[x] == oldData[i]){
					newData.splice(x,1);
				}
			}
		}
	}

	console.log(newData);

})();