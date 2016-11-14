(function () {

	var randomNumber = Math.random(),
	arr = [];

// Random function
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

// Pushing to array 100 items

(function () {
	for (var i = 0; i < 100; i++ ){
		arr.push(getRandomInt(1, 100));
	};
}());

// Arr output
console.log("======================Массив====================")
console.log(arr);
console.log("======================Массив====================")

// findMinMax function
function findMinMax(array,extr) {
	if (extr == "max") {
		return Math.max.apply(Math, arr);;
	}else if (extr == "min") {
		return Math.min.apply(Math, arr);;
	}else {
		console.log("Неизвестное понятие")
	};
};
(function () {
	var resultMax = findMinMax(arr, 'max');
	var resultMin = findMinMax(arr, 'min');
	console.log("Максимальное значение: " + resultMax); 
	console.log("Минимальное значение: " + resultMin); 
}());

// special object
function convertArrayToObj (array) {
	var key,
	str="abcdefghijklmnopqrstuvwxyz",
	obj = {};
	
	for (var i = 1; i <= array.length; i++){
		if (i <= 26){
			key = str.charAt(i-1);
			obj[key]=array[i];
		}else if (i > 26) {
			key = i-26;
			obj[key]=array[i];
		}
	}
	return obj;
}
console.log(convertArrayToObj(arr));

// arr filter
function filterNew(arr1, arr2){
	for (var i = 0; i <= arr1.length;i++){
		for (var j = 0; j <= arr2.length; j++){
			if (arr2.indexOf(arr1[i]) !== -1){
				arr1.splice(i,1);
			}
		}
	}
}

// testing task 5
var newData = [2, 12, 22, 6, 32];
var oldData = [12, 5, 7, 17, 22, 32];

filterNew(newData, oldData);
console.log(newData); 
}());	