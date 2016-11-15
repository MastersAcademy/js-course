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
		var max = 0;
		if (!(arrayToFind instanceof Array)) {
			console.warn(arrayToFind, 'is not Array');
			return;
		}
		arrayToFind.map(function (curent, i, array) {
			// console.log(arguments);
			max = Math.max(curent, max);
		});
		return(max);
	}
	console.log(resultMax(arrayToFind));

	var resultMin = function findMinMax(arrayToFind) {
		var min = 0;
		if (!(arrayToFind instanceof Array)) {
			console.warn(arrayToFind, 'is not Array');
			return;
		}
		arrayToFind.map(function (curent, i, array) {
			// console.log(arguments);
			min = Math.min(curent, min);
		});
		return(min);
	}
	console.log(resultMin(arrayToFind));
	// 4

	// 5
})();