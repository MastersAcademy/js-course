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
	function convertArrayToObj (array) {

		var obj = {};

		/* Staff to convert array to obj
		 //...
		 */

		return obj;

	}

	// 5


})();